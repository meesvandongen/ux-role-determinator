import {mean} from "lodash-es";

export interface CategoryScores {
    design: {
        progress: Progress;
        score: number;
    };
    writing: {
        progress: Progress;
        score: number;
    };
    development: {
        progress: Progress;
        score: number;
    };
    research: {
        progress: Progress;
        score: number;
    };
    managing: {
        progress: Progress;
        score: number;
    };
}

export interface Progress {
    total: number,
    completed: number,
}

export interface Assessment {
    // VisualInteractionDesignerAssessment
    graphics: number;
    prototyping: number;
    uiTheory: number;
    ui: number;
    // UserResearcherAssessment
    dataAnalysis: number;
    researchEvangelist: number;
    conductingResearch: number;
    definingResearch: number;
    // UxWriterAssessment
    campaigning: number;
    contentManagement: number;
    contentStrategy: number;
    contentWriting: number;
    // CreativeDeveloperAssessment
    designImplementation: number;
    richInteraction: number;
    codeUxAdvocate: number;
}

export function assessmentToCategoryScores(
    assessment: Assessment
): CategoryScores {
    const designSkillAssessment = [
        assessment.graphics,
        assessment.prototyping,
        assessment.uiTheory,
        assessment.ui,
    ];

    const researchSkillAssessment = [
        assessment.dataAnalysis,
        assessment.researchEvangelist,
        assessment.conductingResearch,
        assessment.definingResearch,
    ];

    const writingSkillAssessment = [
        assessment.contentManagement,
        assessment.contentStrategy,
        assessment.contentWriting,
        assessment.campaigning,
    ];

    const developmentSkillAssessment = [
        assessment.designImplementation,
        assessment.richInteraction,
        assessment.codeUxAdvocate,
    ];

    return {
        design: {
            progress: {
                total: designSkillAssessment.length,
                completed: calculateCompletion(designSkillAssessment),
            },
            score: Math.round(
                mean(designSkillAssessment)
            ),
        },
        research: {
            progress: {
                total: researchSkillAssessment.length,
                completed: calculateCompletion(researchSkillAssessment),
            },
            score: Math.round(
                mean(researchSkillAssessment)
            )
        },
        writing: {
            progress: {
                total: writingSkillAssessment.length,
                completed: calculateCompletion(writingSkillAssessment),
            },
            score: Math.round(
                mean(writingSkillAssessment)
            )
        },
        development: {
            progress: {
                total: developmentSkillAssessment.length,
                completed: calculateCompletion(developmentSkillAssessment),
            },
            score: Math.round(
                mean(developmentSkillAssessment)
            )
        },
        managing: {
            progress: {
                total: 10,
                completed: 1,
            },
            score: 1,
        },
    };
}


export function calculateCompletion(skillAssessment: number[]): number {
    return skillAssessment.filter((question) => {
        return question > 0;
    }).length;
}