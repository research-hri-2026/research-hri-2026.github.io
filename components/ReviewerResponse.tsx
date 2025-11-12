import React from 'react';
import Section from './Section';

const ReviewerResponse: React.FC = () => {
  return (
    <Section id="discussion" title="Discussion & Author's Response">
      <div className="space-y-8 text-lg text-justify leading-relaxed">
        <p className="text-center italic">
          We are grateful to the reviewers for their insightful feedback, which has been invaluable in identifying areas for improvement and clarifying the contributions of our work. This section addresses the key themes raised in the reviews.
        </p>
        
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-gray-800">1. On Claims of Trust and Fluency</h3>
          <p>
            Reviewers correctly pointed out that our claims regarding "human trust and fluency" are not directly supported by the current evaluation, as it does not include a human subjects study. The title was chosen to reflect the ultimate goal and motivation for this line of research: creating robotic systems that are reliable enough to foster fluent and trustworthy collaborations. Our work establishes the foundational technical architecture for resilience, which we hypothesize is a necessary precondition for trust. We acknowledge that a formal user study is the critical next step to validate this hypothesis. This is a primary direction for our future work.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-gray-800">2. On Evaluation, Results, and Novelty</h3>
          <p>
            The feedback highlighted a need for more comprehensive results and a clearer framing of our work's novelty. Our primary contribution is the robust <strong>integration</strong> of perception, prediction, and planning into a resilient, multi-layered system capable of detecting and recovering from failures where standard methods do not. While individual components (like MPC or particle filters) are established, their synthesis into a shared autonomy framework with a dual-trigger supervisor is novel.
          </p>
          <p className="mt-4">
            To better substantiate our claims, we are preparing the following for the final version and supplementary materials:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
            <li><strong>Quantitative Analysis:</strong> A detailed table of success rates, localization error, and task completion times across multiple trials for our method versus the baseline.</li>
            <li><strong>Ablation Studies:</strong> To clarify the contribution of each module (e.g., the failsafe supervisor, the ambiguity filter), we will provide ablation studies showing system performance with these components disabled.</li>
            <li><strong>Detailed Methodology:</strong> We will provide comprehensive details on the simulation setup, the number of trials run for each scenario, and the specific parameters used, to ensure reproducibility.</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-gray-800">3. On Clarity, Formatting, and Missing Materials</h3>
          <p>
            We apologize for the issues with formatting, unclear notation, and broken links, which hindered readability. All reported formatting errors will be corrected. We will provide a complete appendix with detailed derivations, clear definitions for all notation used, and an expanded "Related Work" section to better situate our contributions. The supplementary video and other materials will be made available with the final publication.
          </p>
        </div>
        
      </div>
    </Section>
  );
};

export default ReviewerResponse;
