import React from 'react';
import { Image, Video, Sparkles } from 'lucide-react';

interface MediaPlaceholderProps {
  id: string;
  title: string;
  dimensionLabel: string;
  aspectRatio?: '16/9' | '1/1' | '4/3' | '3/4' | '9/16';
  type?: 'image' | 'video';
  height?: string;
  className?: string;
}

export const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({
  id,
  title,
  dimensionLabel,
  aspectRatio = '16/9',
  type = 'image',
  height,
  className = ''
}) => {
  return (
    <div
      id={`placeholder-${id}`}
      style={{
        aspectRatio: height ? undefined : aspectRatio,
        height: height || undefined,
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.12) 0%, rgba(224, 86, 253, 0.06) 50%, rgba(20, 10, 40, 0.9) 100%)',
        border: '1.5px dashed rgba(224, 86, 253, 0.35)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        textAlign: 'center',
        boxShadow: 'inset 0 0 40px rgba(155, 81, 224, 0.1)'
      }}
      className={`media-placeholder-slot ${className}`}
    >
      <div
        style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          background: 'rgba(224, 86, 253, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '12px',
          color: '#E056FD',
          border: '1px solid rgba(224, 86, 253, 0.3)'
        }}
      >
        {type === 'video' ? <Video size={28} /> : <Image size={28} />}
      </div>

      <span
        style={{
          fontSize: '0.95rem',
          fontWeight: 600,
          color: '#FFFFFF',
          marginBottom: '6px'
        }}
      >
        {title}
      </span>

      <span
        style={{
          fontSize: '0.75rem',
          fontWeight: 700,
          color: '#FFDE59',
          background: 'rgba(255, 222, 89, 0.12)',
          padding: '4px 10px',
          borderRadius: '999px',
          border: '1px solid rgba(255, 222, 89, 0.25)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px'
        }}
      >
        <Sparkles size={12} /> Espacio Multimedia ({dimensionLabel})
      </span>
    </div>
  );
};
