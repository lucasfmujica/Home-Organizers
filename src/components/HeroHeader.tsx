import { ArrowRight } from 'lucide-react';
import React from 'react';

// Add TypeScript interface for props
interface HeroHeaderProps {
    backgroundImage?: string;
    title?: string;
    subtitle?: string;
    ctaText?: string;
    onCtaClick?: () => void;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({
    backgroundImage = '/hero-background.jpg',
    title = 'Transform Your Space,\nSimplify Your Life',
    subtitle = 'Professional home organization services tailored to your lifestyle and needs.',
    ctaText = 'Get Organized Today',
    onCtaClick = () => (window.location.href = '#contact'),
}) => {
    // Move styles to a constant or CSS file
    const styles = {
        container: {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative' as const,
        },
        fallbackImage: {
            position: 'absolute' as const,
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover' as const,
            zIndex: -1,
        },
    };

    return (
        <section className="padding-section-large" style={styles.container}>
            <img
                src={backgroundImage}
                alt=""
                style={styles.fallbackImage}
                loading="eager"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.style.display = 'none';
                }}
            />

            <div className="padding-global">
                <div className="container-large">
                    <div className="text-color-light">
                        {' '}
                        {/* Light text for contrast */}
                        <h1 className="heading-style-h1 text-weight-bold">
                            {title.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    {i < title.split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </h1>
                        <p className="text-size-large spacer-32">{subtitle}</p>
                        <button
                            onClick={onCtaClick}
                            className="background-color-primary display-inlineflex text-color-light"
                            style={{ gap: '0.5rem', alignItems: 'center' }}>
                            {ctaText}
                            <ArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroHeader;
