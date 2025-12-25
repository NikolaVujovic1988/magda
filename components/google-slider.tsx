"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Review = {
    name: string;
    rating: number;
    time: string;
    text: string;
};

const REVIEWS: Review[] = [
    {
        name: "Bettina Schoenemann",
        rating: 5,
        time: "vor einem Jahr",
        text: "Frau Nesic ist ausgesprochen kompetent und versorgt meine sehr große und komplizierte Wunde hervorragend. Mir geht es seit ihrer Betreuung deutlich besser, selbst die behandelnden Ärzte sind sehr überrascht.",
    },
    {
        name: "Ta Blu",
        rating: 5,
        time: "vor 7 Monaten",
        text: "Wir sind sehr dankbar den Pflegedienst Magda gefunden zu haben. Von der ersten Minute an fühlt man sich hier gut aufgehoben und kompetent betreut.",
    },
    {
        name: "Marc Uhland",
        rating: 5,
        time: "vor 7 Monaten",
        text: "Sehr liebe freundliche Menschen, sehr zuverlässig, kompetent. Magda hat ihren Laden voll im Griff, ein hilfreicher mobiler Mikrokosmos!",
    },
    {
        name: "Dr. Sylvia Goldstraß",
        rating: 5,
        time: "vor 11 Monaten",
        text: 'Das Pflegeunternehmen "Magda" kann ich sehr empfehlen.',
    },
    {
        name: "Maria Sanchez",
        rating: 5,
        time: "vor 7 Monaten",
        text: "Ich bin wirklich mehr als zufrieden, sehr nett freundlich und sehr professionell, ich kann Magda sehr empfehlen.",
    },
    {
        name: "Evelin Richter",
        rating: 5,
        time: "vor 2 Monaten",
        text: "Meine Eltern kommen super zurecht mit dem Pflegedienst.",
    },
    {
        name: "Monika Hesse",
        rating: 5,
        time: "vor einem Jahr",
        text: "Frau Nesic ist medizinisch sehr fachlich und kompetent und Sie kennt sich im Stoma System aus. Ich finde dass Sie perfekt ist für einen neuen Start und wünsche Ihr viel Erfolg.",
    },
    {
        name: "Karl Heinz Grollius",
        rating: 4,
        time: "vor 5 Monaten",
        text: "Ich bin zufrieden mit der Arbeit von Magdas Pflegedienst und komme gut mit allen Mitarbeiterinnen klar.",
    },
];

function Stars({ rating }: { rating: number }) {
    const full = Math.round(rating);
    return (
        <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    className={`w-4 h-4 ${i < full ? "text-[#FFB800] fill-[#FFB800]" : "text-gray-300"
                        }`}
                />
            ))}
        </div>
    );
}

function ReviewCard({ review }: { review: Review }) {
    const initials = review.name
        .split(" ")
        .map((n) => n.charAt(0))
        .join("")
        .toUpperCase()
        .slice(0, 2);

    return (
        <div className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
            {/* Quote Icon Background */}
            <div className="absolute top-6 right-6 opacity-5">
                <Quote className="w-16 h-16 text-[#986AC6]" />
            </div>

            {/* Header */}
            <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#986AC6] to-[#B084D6] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">{initials}</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                        <p className="text-sm text-gray-500">{review.time}</p>
                    </div>
                </div>
            </div>

            {/* Stars */}
            <div className="mb-4">
                <Stars rating={review.rating} />
            </div>

            {/* Review Text */}
            <p className="text-gray-700 leading-relaxed flex-1 relative z-10">
                "{review.text}"
            </p>

            {/* Google Badge */}
            <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                    </svg>
                    <span className="font-medium">Google Rezension</span>
                </div>
            </div>
        </div>
    );
}

export default function MagdaReviewsSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Cards per view based on screen size
    const getCardsPerView = () => {
        if (typeof window === "undefined") return 1;
        if (window.innerWidth >= 1280) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    };

    const [cardsPerView, setCardsPerView] = useState(1);

    useEffect(() => {
        setMounted(true);
        setCardsPerView(getCardsPerView());

        const handleResize = () => {
            setCardsPerView(getCardsPerView());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(0, REVIEWS.length - cardsPerView);

    const next = () => {
        setCurrentIndex((prev) => {
            const max = Math.max(0, REVIEWS.length - cardsPerView);
            return prev >= max ? 0 : prev + 1;
        });
    };

    const prev = () => {
        setCurrentIndex((prev) => {
            const max = Math.max(0, REVIEWS.length - cardsPerView);
            return prev <= 0 ? max : prev - 1;
        });
    };

    // Autoplay
    useEffect(() => {
        if (!mounted) return;

        if (timerRef.current) {
            clearInterval(timerRef.current);
        }

        timerRef.current = setInterval(() => {
            setCurrentIndex((prev) => {
                const max = Math.max(0, REVIEWS.length - cardsPerView);
                return prev >= max ? 0 : prev + 1;
            });
        }, 5000);

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [mounted, cardsPerView]);

    if (!mounted) {
        return null;
    }

    return (
        <section id="bewertungen" className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-[#F9F7FC] to-white">
            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-[#986AC6]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#986AC6]/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#986AC6]/20 rounded-full px-6 py-3 mb-6">
                        <Sparkles className="w-4 h-4 text-[#986AC6]" />
                        <span className="text-sm font-medium text-[#986AC6]">Bewertungen</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        Was unsere{" "}
                        <span className="bg-gradient-to-r from-[#986AC6] to-[#B084D6] bg-clip-text text-transparent">
                            Kund:innen
                        </span>{" "}
                        sagen
                    </h2>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        Echte Erfahrungen mit Magda Ambulanter Pflegedienst aus Google-Rezensionen
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg hover:shadow-xl hover:bg-[#986AC6] hover:text-white hover:border-[#986AC6] transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Vorherige Bewertungen"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg hover:shadow-xl hover:bg-[#986AC6] hover:text-white hover:border-[#986AC6] transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Nächste Bewertungen"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                    </button>

                    {/* Cards Container */}
                    <div className="overflow-hidden" ref={containerRef}>
                        <div
                            className="flex transition-transform duration-700 ease-out mb-4"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                            }}
                        >
                            {REVIEWS.map((review, idx) => (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 px-3"
                                    style={{ width: `${100 / cardsPerView}%` }}
                                >
                                    <ReviewCard review={review} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex items-center justify-center gap-2 mt-12">
                        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex
                                        ? "w-10 bg-[#986AC6]"
                                        : "w-2.5 bg-[#986AC6]/25 hover:bg-[#986AC6]/40"
                                    }`}
                                aria-label={`Zur Bewertungsgruppe ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center flex flex-col justify-center items-center p-6 bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 rounded-2xl">
                        <div className="text-3xl font-bold text-[#986AC6] mb-2">4.9</div>
                        <div className="text-sm text-gray-600 font-medium">Durchschnitt</div>
                        <Stars rating={5} />
                    </div>
                    <div className="text-center p-6 bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 rounded-2xl">
                        <div className="text-3xl font-bold text-[#986AC6] mb-2">25+</div>
                        <div className="text-sm text-gray-600 font-medium">Bewertungen</div>
                    </div>
                    <div className="text-center p-6 bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 rounded-2xl">
                        <div className="text-3xl font-bold text-[#986AC6] mb-2">100%</div>
                        <div className="text-sm text-gray-600 font-medium">Zufriedenheit</div>
                    </div>
                    <div className="text-center p-6 bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 rounded-2xl">
                        <div className="text-3xl font-bold text-[#986AC6] mb-2">15+</div>
                        <div className="text-sm text-gray-600 font-medium">Jahre Erfahrung</div>
                    </div>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-center text-xs text-gray-500 max-w-3xl mx-auto">
                    Hinweis: Diese Bewertungen stammen aus echten Google-Rezensionen und wurden manuell übertragen.
                </p>
            </div>
        </section>
    );
}
