import { HeadphonesIcon, LayersThree, Pinterest, Video } from 'lucide-react';
import React, { ReactNode, useEffect, useState } from 'react';

// Add TypeScript interfaces
interface ProcessStep {
    number: number;
    title: string;
    description: string;
    icon: ReactNode;
    details: string[];
    duration?: string;
    isIncluded: boolean;
}

interface AnimateOnScrollProps {
    children: ReactNode;
    delay?: number;
}

interface StepCardProps {
    step: ProcessStep;
    isActive: boolean;
    onClick: (number: number) => void;
}

const processSteps: ProcessStep[] = [
    {
        number: 1,
        title: 'Initial Consultation',
        description:
            'Free 25-minute video consultation to discuss your project needs.',
        icon: <Video className="text-color-primary" />,
        details: [
            'Understand your organization goals',
            'Review space photos',
            'Discuss timeline and preferences',
        ],
        duration: '25 minutes',
        isIncluded: true,
    },
    // Add other steps...
];

// Fixed AnimateOnScroll component with proper typing
const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
    children,
    delay = 0,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [ref, setRef] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(ref);
        return () => observer.disconnect();
    }, [ref]);

    return (
        <div
            ref={setRef}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? 0 : 20}px)`,
                transition: `all 0.6s ease-out ${delay}s`,
            }}>
            {children}
        </div>
    );
};

// Fixed StepCard component with proper typing
const StepCard: React.FC<StepCardProps> = ({ step, isActive, onClick }) => {
    return (
        <div
            className={`step-card background-color-secondary ${
                isActive ? 'text-color-primary' : ''
            }`}
            style={{
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid var(--color-secondary)',
            }}
            onClick={() => onClick(step.number)}>
            <div
                className="display-inlineflex"
                style={{ gap: '1rem', alignItems: 'center' }}>
                <div
                    className={`background-color-${
                        isActive ? 'primary' : 'secondary'
                    } text-color-${isActive ? 'light' : 'primary'}`}
                    style={{
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        border: isActive ? 'none' : '1px solid var(--color-primary)',
                    }}>
                    {step.number}
                </div>
                <div>
                    <h3 className="heading-style-h4">{step.title}</h3>
                    {step.duration && (
                        <p className="text-color-neutral spacer-8">
                            {step.duration}
                        </p>
                    )}
                </div>
                {step.icon}
            </div>

            <div
                style={{
                    maxHeight: isActive ? '500px' : '0',
                    opacity: isActive ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'all 0.5s ease',
                    marginTop: isActive ? '1rem' : '0',
                }}>
                <p className="spacer-16">{step.description}</p>
                <ul className="text-color-neutral" style={{ listStyle: 'none' }}>
                    {step.details.map((detail, index) => (
                        <li
                            key={index}
                            className="spacer-8"
                            style={{ display: 'flex', alignItems: 'center' }}>
                            <span
                                style={{
                                    width: '6px',
                                    height: '6px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--color-primary)',
                                    marginRight: '12px',
                                }}></span>
                            {detail}
                        </li>
                    ))}
                </ul>
                {step.isIncluded && (
                    <p className="text-color-primary text-size-small spacer-8">
                        Included in service
                    </p>
                )}
            </div>
        </div>
    );
};

const HowItWorks: React.FC = () => {
    const [activeStep, setActiveStep] = useState(1);

    return (
        <section className="padding-section-large">
            <div className="padding-global">
                <div className="container-medium">
                    <AnimateOnScroll>
                        <h2 className="heading-style-h2 text-align-center">
                            How It Works
                        </h2>
                        <p className="text-size-large text-align-center text-color-neutral spacer-48">
                            Our proven process to transform your space
                        </p>
                    </AnimateOnScroll>

                    <div className="spacer-64">
                        {processSteps.map((step, index) => (
                            <AnimateOnScroll key={step.number} delay={index * 0.2}>
                                <StepCard
                                    step={step}
                                    isActive={activeStep === step.number}
                                    onClick={setActiveStep}
                                />
                            </AnimateOnScroll>
                        ))}
                    </div>

                    <AnimateOnScroll delay={0.8}>
                        <div className="text-align-center">
                            <button
                                className="background-color-primary text-color-light"
                                onClick={() => {
                                    const contactSection =
                                        document.getElementById('contact');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start',
                                        });
                                    }
                                }}>
                                Schedule Your Consultation
                            </button>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
