export function Logo({ size = 'medium' }: { size?: 'small' | 'medium' | 'large' }) {
  const sizes = {
    small: { container: 'h-12', text1: '1.25rem', text2: '0.625rem', sanskrit: '0.5rem' },
    medium: { container: 'h-16', text1: '1.75rem', text2: '0.75rem', sanskrit: '0.625rem' },
    large: { container: 'h-24', text1: '2.5rem', text2: '1rem', sanskrit: '0.75rem' }
  };

  const s = sizes[size];

  return (
    <div className={`flex flex-col justify-center ${s.container}`}>
      <div className="flex items-center gap-2">
        {/* Decorative element */}
        <div className="relative">
          <div className="w-8 h-8 border-2 border-primary rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
          </div>
        </div>
        
        {/* Brand name */}
        <div>
          <h1 
            className="text-primary tracking-wide"
            style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontSize: s.text1,
              fontWeight: '700',
              lineHeight: '1',
              letterSpacing: '0.02em'
            }}
          >
            Radhe Radhe
          </h1>
          <p 
            className="text-muted-foreground tracking-wider uppercase"
            style={{ 
              fontSize: s.text2,
              fontWeight: '500',
              lineHeight: '1.2',
              letterSpacing: '0.1em'
            }}
          >
            Events & Decoration
          </p>
          <p 
            className="text-accent italic"
            style={{ 
              fontSize: s.sanskrit,
              lineHeight: '1',
              marginTop: '0.125rem'
            }}
          >
            सर्वे भवन्तु सुखिनः ✨
          </p>
        </div>
      </div>
    </div>
  );
}
