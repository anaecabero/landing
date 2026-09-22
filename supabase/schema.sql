-- =========================================================================
-- ESQUEMA DE BASE DE DATOS PARA LANDING PAGE DE CURSO DE RESINA (SUPABASE)
-- =========================================================================
-- Ejecuta este script en el SQL Editor de tu Dashboard de Supabase.

-- 1. Habilitar la extensión de generación de UUIDs si no está habilitada
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Tabla para registrar los clics de conversión (Hotmart y WhatsApp)
CREATE TABLE IF NOT EXISTS public.click_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    event_type VARCHAR(50) NOT NULL, -- 'hotmart_checkout', 'whatsapp_community', 'vsl_play', etc.
    section VARCHAR(100) NOT NULL,   -- 'hero', 'top_bar', 'pricing_box', 'guarantee', 'faq', etc.
    utm_source VARCHAR(100),
    utm_medium VARCHAR(100),
    utm_campaign VARCHAR(100),
    user_agent TEXT,
    referrer TEXT,
    device_type VARCHAR(20) DEFAULT 'desktop', -- 'mobile', 'tablet', 'desktop'
    page_path VARCHAR(255) DEFAULT '/'
);

-- 3. Habilitar Row Level Security (RLS) en la tabla
ALTER TABLE public.click_events ENABLE ROW LEVEL SECURITY;

-- 4. Política de inserción anónima:
-- Permite que cualquier visitante de la landing page registre eventos de clic usando la clave pública (anon key)
DROP POLICY IF EXISTS "Permitir insercion anonima de eventos" ON public.click_events;
CREATE POLICY "Permitir insercion anonima de eventos" 
ON public.click_events 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- 5. Política de lectura segura:
-- Solo usuarios autenticados (tú en el dashboard de Supabase o API privada) pueden ver las métricas
DROP POLICY IF EXISTS "Permitir lectura solo a administradores" ON public.click_events;
CREATE POLICY "Permitir lectura solo a administradores" 
ON public.click_events 
FOR SELECT 
TO authenticated 
USING (true);

-- 6. Índices para consultas rápidas de analítica
CREATE INDEX IF NOT EXISTS idx_click_events_event_type ON public.click_events(event_type);
CREATE INDEX IF NOT EXISTS idx_click_events_created_at ON public.click_events(created_at);
CREATE INDEX IF NOT EXISTS idx_click_events_section ON public.click_events(section);

-- Vista opcional para consultar el resumen diario de métricas
CREATE OR REPLACE VIEW public.vw_daily_conversions AS
SELECT 
    DATE(created_at) AS conversion_date,
    event_type,
    section,
    COUNT(*) AS total_clicks
FROM public.click_events
GROUP BY DATE(created_at), event_type, section
ORDER BY conversion_date DESC, total_clicks DESC;
