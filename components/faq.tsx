"use client";

import { useMemo, useState } from "react";
import { Sparkles, ChevronDown, Phone, ArrowRight } from "lucide-react";

export type FaqItem = {
    question: string;
    answer: string;
    category?: string;
};

type Props = {
    title?: string;
    subtitle?: string;
    items?: FaqItem[];
    /** default: 0 (erstes FAQ offen). Setze auf null, wenn alles zu sein soll. */
    defaultOpenIndex?: number | null;
};

const defaultItems: FaqItem[] = [
    {
        category: "Allgemein",
        question: "Was ist ein ambulanter Pflegedienst?",
        answer:
            "Ein ambulanter Pflegedienst unterstützt Menschen in der eigenen Wohnung. Wir kommen zu Ihnen nach Hause und helfen – je nach Bedarf – bei Pflege, medizinischen Maßnahmen, Betreuung und Alltagsthemen.",
    },
    {
        category: "Allgemein",
        question: "Für wen ist ambulante Pflege geeignet?",
        answer:
            "Für Menschen mit Pflegegrad, nach Krankenhausaufenthalten, bei chronischen Erkrankungen oder wenn im Alltag Unterstützung nötig ist – damit ein Leben zuhause möglichst lange gut möglich bleibt.",
    },
    {
        category: "Leistungen",
        question: "Welche Leistungen bietet Magda Ambulanter Pflegedienst an?",
        answer:
            "Typisch sind Grundpflege, Behandlungspflege nach Verordnung, hauswirtschaftliche Unterstützung, Betreuung/Entlastung sowie Pflegeberatung. Welche Leistungen im Detail passen, klären wir im Erstgespräch.",
    },
    {
        category: "Leistungen",
        question: "Was ist der Unterschied zwischen Grundpflege und Behandlungspflege?",
        answer:
            "Grundpflege umfasst Unterstützung bei Körperpflege, Ernährung und Mobilität. Behandlungspflege sind medizinische Leistungen (z. B. Wundversorgung oder Medikamentengabe) und erfolgen in der Regel auf ärztliche Verordnung.",
    },
    {
        category: "Kosten",
        question: "Was kostet ambulante Pflege?",
        answer:
            "Die Kosten hängen von Pflegegrad, Leistungspaket und Häufigkeit der Einsätze ab. Häufig werden Leistungen über Pflegekasse oder Krankenkasse abgerechnet. Einen möglichen Eigenanteil erklären wir transparent vorab.",
    },
    {
        category: "Kosten",
        question: "Wie wird ambulante Pflege finanziert?",
        answer:
            "Je nach Situation über die Pflegekasse (bei Pflegegrad), über die Krankenkasse (bei ärztlicher Verordnung) oder privat. Wir unterstützen Sie dabei, die passende Finanzierung zu klären.",
    },
    {
        category: "Ablauf",
        question: "Wie läuft das Erstgespräch ab?",
        answer:
            "Wir besprechen Ihre Situation, Wünsche und den tatsächlichen Bedarf. Danach erstellen wir einen individuellen Plan und ein verständliches Angebot. Auf Wunsch beziehen wir Angehörige mit ein.",
    },
    {
        category: "Ablauf",
        question: "Wie schnell kann die Versorgung starten?",
        answer:
            "Das hängt von Kapazitäten und dem gewünschten Leistungsumfang ab. Bei dringendem Bedarf (z. B. nach Klinikaufenthalt) versuchen wir, kurzfristig eine Lösung zu ermöglichen.",
    },
    {
        category: "Ablauf",
        question: "Kann ich Leistungen später anpassen?",
        answer:
            "Ja. Pflegebedarfe verändern sich. Leistungen können nach Absprache erweitert, reduziert oder umgestellt werden – wir stimmen das flexibel mit Ihnen ab.",
    },
    {
        category: "Dokumente",
        question: "Welche Unterlagen werden für den Start benötigt?",
        answer:
            "Meist reichen Versichertendaten und – falls vorhanden – Pflegegrad-Bescheid. Für Behandlungspflege benötigen wir zusätzlich eine ärztliche Verordnung. Wir sagen Ihnen genau, was in Ihrem Fall nötig ist.",
    },
];

export default function MagdaFaq({
    title = "Häufige Fragen",
    subtitle = "Kurz beantwortet – und wenn etwas offen bleibt, melden Sie sich gerne bei uns.",
    items,
    defaultOpenIndex = 0,
}: Props) {
    const faqs = useMemo(() => items ?? defaultItems, [items]);
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

    return (
        <section id="faq" className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F9F7FC] to-white" />

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-[#986AC6]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#986AC6]/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#986AC6]/20 rounded-full px-6 py-3 mb-6">
                        <Sparkles className="w-4 h-4 text-[#986AC6]" />
                        <span className="text-sm font-medium text-[#986AC6]">FAQ</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        {title.split(" ").slice(0, -1).join(" ") || title}{" "}
                        <span className="bg-gradient-to-r from-[#986AC6] to-[#B084D6] bg-clip-text text-transparent">
                            {title.split(" ").slice(-1).join(" ")}
                        </span>
                    </h2>

                    {subtitle ? (
                        <p className="text-xl text-gray-600 leading-relaxed">{subtitle}</p>
                    ) : null}
                </div>

                {/* FAQ List */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        const contentId = `faq-content-${idx}`;
                        const buttonId = `faq-button-${idx}`;

                        return (
                            <div
                                key={`${faq.question}-${idx}`}
                                className="bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                            >
                                <button
                                    id={buttonId}
                                    type="button"
                                    aria-expanded={isOpen}
                                    aria-controls={contentId}
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="w-full text-left p-6 flex items-start justify-between gap-4"
                                >
                                    <div className="flex-1">
                                        {faq.category ? (
                                            <div className="text-sm font-medium text-[#986AC6] mb-2">
                                                {faq.category}
                                            </div>
                                        ) : null}
                                        <div className="text-lg font-bold text-gray-900">
                                            {faq.question}
                                        </div>
                                    </div>

                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-xl flex items-center justify-center shadow-md">
                                        <ChevronDown
                                            className={`w-6 h-6 text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </div>
                                </button>

                                <div
                                    id={contentId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-6 pb-6">
                                            <div className="h-px bg-[#986AC6]/15 mb-4" />
                                            <p className="text-gray-600 leading-relaxed m-0">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Optional hint line */}
                <div className="text-center mt-12">
                    <p className="text-sm text-gray-500">
                        Noch Fragen? Kontaktieren Sie uns – wir beraten Sie gerne unverbindlich.
                    </p>
                    <a
                        href="#kontakt"
                        className="group relative inline-flex items-center justify-center bg-[#986AC6] text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-[#986AC6]/25 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 overflow-hidden mt-6"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-[#8357B8] to-[#986AC6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative flex items-center gap-3">
                            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                            Kostenlosen Ersttermin vereinbaren
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 hidden md:block" />
                        </span>
                    </a>


                </div>
            </div>
        </section>
    );
}
