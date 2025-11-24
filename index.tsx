<Hero />

    <Section id="abstract" title="Abstract">
      <p className="text-lg leading-relaxed text-justify">
        Safe and resilient multi-robot collaboration in human environments is a critical challenge for real world deployment. While persistent and extensive work is being carried out on human following, existing methods often rely on idealized assumptions of perfect perception and localization. Consequently, they fail to address catastrophic failures like controller deadlocks in cluttered spaces, causing interactional breakdowns that halt the team's progress and compromise task success. In this work, we tackle these challenges by introducing a safety aware control architecture built on two core ideas that enables resilient human-robot teaming. We have developed a robust perception pipeline that reliably estimates human position from noisy, ambiguous RF-ranging data. This is achieved using a two-phased spatiotemporal filter that transforms sparse sensor measurements into a continuous human position estimate, even with a minimal two robot configuration. We then present a multi-layered failsafe supervisor that monitors the low level MPC and uses a dual trigger mechanism monitoring the system costs and the progress disparity. When deadlock is detected, a progress aware recovery planner ensures that the system’s mobility is restored and the formation is guided safely out of the trap. We demonstrate that our architecture successfully navigates complex trap scenarios where nominal planners fail, demonstrating a significant improvement in system endurance, reliability and robustness.
      </p>
    </Section>

    <Section id="method" title="Method Overview">
      <p className="text-lg leading-relaxed mb-8 text-justify">
        Our proposed hierarchical system architecture ensures safe and reliable human collaboration. Noisy RF-ranging data is first processed by the Perception and Prediction Module to produce a probabilistic forecast of the human's path. This forecast is used by the Risk-Aware Motion Planner (a Stochastic MPC) to generate safe actions. In parallel, a supervisor monitors for "coordination gaps" and can initiate a collaborative resolution process.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">Foundational Perception</h3>
          <p className="text-lg">We use a two-phase ambiguity resolution filter to reliably estimate human state from noisy RF sensor data, resolving geometric ambiguities inherent in two-robot setups.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Risk-Aware Motion Planning</h3>
          <p className="text-lg">A Stochastic Model Predictive Control (S-MPC) framework reasons about the full distribution of uncertainty to manage risk, planning cautious and adaptive robot behaviors.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Shared Autonomy Protocol</h3>
          <p className="text-lg">A dual-trigger supervisory layer detects coordination gaps and internal deadlocks, initiating a human-in-the-loop collaborative recovery process.</p>
        </div>
         <div>
          <h3 className="text-2xl font-bold mb-2">Collaborative Recovery</h3>
          <p className="text-lg">When a failure is detected, the system communicates with the human partner, offering strategic choices to jointly resolve the situation, enhancing resilience and trust.</p>
        </div>
      </div>
       <div className="mt-12">
         <h3 className="text-2xl font-bold mb-4 text-center">System Architecture Overview</h3>
         <img src="System Architecture.png" alt="System Architecture Diagram" className="w-full rounded-lg shadow-lg border border-gray-200" />
         <p className="text-center text-md italic text-gray-600 mt-2">
            Figure 1: The proposed hierarchical system architecture.
         </p>
         <div className="text-lg mt-4 text-justify space-y-4">
            <p>Our approach integrates three coordinated layers to achieve safe, responsive multi-robot human-following:</p>
            
            <div>
                <h4 className="text-xl font-bold mt-4 mb-2">Layer 1: Perception and Prediction Pipeline</h4>
                <p>The system begins with noisy RF-ranging measurements. Our <strong>Region of Plausibility</strong> formulation converts these into bounded geometric areas (annuli), and a <strong>two-phase ambiguity filter</strong> resolves localization ambiguity to produce a reliable human position estimate. This estimate is then fed into a context-aware <strong>Particle Filter</strong>, which generates a rich, probabilistic forecast of the human's future path—not as a single trajectory, but as a "tube" of possibilities that captures uncertainty.</p>
            </div>

            <div>
                <h4 className="text-xl font-bold mt-4 mb-2">Layer 2: Risk-Aware Motion Planning (S-MPC)</h4>
                <p>The probabilistic forecast flows into a <strong>stochastic model predictive controller (S-MPC)</strong> that plans safe, predictable robot motions while maintaining formation. This planner integrates <strong>Velocity Obstacles (VO)</strong> to proactively generate guaranteed collision-free velocities around static and dynamic objects. The S-MPC's core safety mechanism is a probabilistic risk cost that penalizes potential future collisions, leading to emergent cautious behavior. It continuously monitors for three complementary failure modes:</p>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                    <li><strong>Constraint-Conflict Failure:</strong> High MPC cost indicates conflicting objectives (e.g., formation maintenance vs. collision avoidance).</li>
                    <li><strong>Stagnation Failure:</strong> Low MPC cost but negligible forward progress indicates the robots are stuck in a local minimum.</li>
                    <li><strong>Coordination Gap Failure:</strong> The team is losing synchronization with the human, with separation distance exceeding a safety threshold (D_max).</li>
                </ul>
            </div>
            
            <div>
                <h4 className="text-xl font-bold mt-4 mb-2">Layer 3: Failsafe Supervisor and Human-Robot Coordination</h4>
                <p>When any failure mode is detected, the supervisor triggers a clear, actionable alert to the human partner, offering three strategic choices for collaborative recovery:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                    <li><strong>"Wait Mode":</strong> Pause the task and allow the robots to rendezvous with the human's last known position.</li>
                    <li><strong>"Redirection Mode":</strong> Assign a new goal waypoint for the robots to navigate to autonomously.</li>
                    <li><strong>"Role Reversal Mode":</strong> Command the robots to take the lead and plot a safe path through a challenging area for the human to follow.</li>
                </ul>
                 <p>The supervisor seamlessly handles the transition between autonomous operation and human guidance, ensuring the team keeps moving toward their goal.</p>
            </div>
            
            <div>
                <h4 className="text-xl font-bold mt-4 mb-2">Why Integration Matters</h4>
                <p>This three-layer architecture works because each layer is optimized for its role—perception for robustness, planning for safety, and supervision for resilience. Individual components cannot replicate integrated system performance (demonstrated through ablation studies). The tight coupling between perception reliability and control failure detection prevents catastrophic cascading failures common in systems where these concerns are addressed separately.</p>
            </div>
          </div>
       </div>
    </Section>

    <Section id="results" title="Results">
       <p className="text-lg leading-relaxed mb-8 text-justify">
        We validate our approach in simulated dynamic environments, demonstrating resilience to sensor noise, ambiguity, and complex navigation scenarios where baseline methods fail. Our evaluation focuses on both the perception pipeline's accuracy and the full system's ability to handle deadlocks.
      </p>
      
      <div className="space-y-16">
        <div>
          <h3 className="text-2xl font-bold mb-4">Perception Pipeline Validation</h3>
          <p className="text-lg mb-4 text-justify">Our pipeline successfully tracks the human's ground truth path while consistently rejecting the ambiguous 'ghost' path. The "Region of Plausibility" concept ensures robustness against sensor noise, while the "Minimum Displacement Principle" resolves ambiguity. The average estimation error was 0.212m, with zero localization failures compared to a 2.5% failure rate for a brittle baseline.</p>
          <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg border border-gray-200 bg-black">
            <video className="w-full h-full object-contain" src="perception.mp4" controls autoPlay muted loop>
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-md italic text-gray-600 mt-2">
            A Deep Dive into Our Robust Perception Pipeline.
          </p>
           <div className="mt-12">
            <h4 className="text-xl font-bold mb-4 text-center">Comparative Analysis: Baseline vs. Our Method</h4>
            <p className="text-lg mb-4 text-justify">
              This video provides a side-by-side comparison of our perception pipeline against a baseline method that uses direct multilateration. Note the baseline's frequent localization failures (red flashes) and incorrect "ghost" path selections, while our method maintains stable and accurate tracking.
            </p>
            <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg border border-gray-200 bg-black mt-4">
              <video className="w-full h-full object-contain" src="comparison2.mp4" controls autoPlay muted loop>
                Your browser does not support the video tag.
              </video>
            </div>
        
           <div className="mt-12">
              <h4 className="text-xl font-bold mb-4 text-center">System Success Rate Comparison</h4>
              <img src="system_performance_chart.png" alt="System Performance Comparison by Path Trajectory" className="w-full rounded-lg shadow-lg border border-gray-200 bg-white p-4" />
               <p className="text-center text-md italic text-gray-600 mt-2">
                   Figure 2: Comparative success rates across five distinct path trajectories.
               </p>
              <div className="text-lg mt-4 text-justify space-y-4">
                   <p>This chart shows the comparative success rates of our proposed system and a standard baseline across five trajectories of increasing complexity. Each result is aggregated from n=30 trials per path, tested across three distinct sensor noise levels (σ={'{'}0.05, 0.10, 0.15{'}'}m) to ensure a robust evaluation.</p>
                   <p>While both systems perform flawlessly on the simple straight-line path (Path 1), the baseline's performance collapses on all non-linear trajectories. This is because Paths 2 through 5—the U-Turn, Circle, Inward Spiral, and Figure-8—all contain segments where the human is no longer directly in front of the robots. This breaks the baseline's naive perception filter, which cannot resolve the resulting geometric ambiguity and fails to maintain a stable track.</p>
                   <p>In contrast, our system demonstrates 100% success across all trajectories, validating the effectiveness of our integrated perception pipeline and failsafe architecture in maintaining robust performance even in challenging, ambiguous scenarios.</p>
              </div>
            </div>
        </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Failsafe Supervisor in Action: Deadlock & Recovery Scenarios</h3>
          <p className="text-lg mb-4 text-justify">
            This video demonstrates the core contribution of our failsafe supervisor across a variety of challenging scenarios. We showcase how the system detects and recovers from different types of failures where a baseline planner would get permanently stuck. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 my-4 text-lg text-justify">
            <li><strong>Deadlocks:</strong> The robot team gets trapped in a narrow passage or blocked by an obstacle. Our system detects the impasse (whether from high-effort constraint conflicts or low-effort stagnation) and initiates a collaborative recovery with the human.</li>
            <li><strong>Coordination Gaps:</strong> The human partner moves too quickly or unpredictably, causing the robots to fall behind. The supervisor identifies the breakdown in team cohesion and alerts the human to re-establish formation.</li>
          </ul>
          <p className="text-lg mb-4 text-justify">
            In all cases, our architecture ensures the team keeps moving, transforming potential mission-ending failures into solvable problems through resilient, human-in-the-loop coordination.
          </p>
          <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg border border-gray-200 bg-black max-w-4xl mx-auto">
            <video 
              className="w-full h-full object-contain" 
              src="failsafe.mp4" 
              controls 
              autoPlay 
              muted 
              loop 
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Future Evaluation: Ablation Studies</h3>
          <p className="text-lg mb-4 text-justify">To further isolate the contributions of our system's components, future work will include ablation studies. We will evaluate system performance with key modules disabled, such as the Failsafe Supervisor and the Two-Phase Ambiguity Filter, to quantify their impact on overall resilience and success rates.</p>
           <ImagePlaceholder aspectRatio="aspect-[2/1]" text="Placeholder for Ablation Study Results" />
        </div>
      </div>
    </Section>
    
    <Section id="related-work" title="Related Work">
        <p className="text-lg leading-relaxed text-justify">
            // TODO: Add content for Related Work here.
            This section addresses reviewer feedback regarding the need for a broader discussion of related literature. Our work builds upon foundational research in several areas. In multi-robot motion planning, we extend concepts from Model Predictive Control (MPC) by incorporating a stochastic framework to handle uncertainty, similar to the work of [Author, Year]. However, our approach is distinct in its focus on human-robot teams and shared autonomy...
            <br/><br/>
            Regarding perception, while UWB-based localization has been explored [Author, Year], our two-phase ambiguity filter provides a novel solution for the minimal two-robot configuration, a common and challenging scenario...
        </p>
    </Section>

    <ReviewerResponse />

    <Section id="user-study" title="User Study (Work in Progress)">
      <p className="text-lg leading-relaxed text-justify">
        The study employs an interactive simulation interface where participants control the human character through various task scenarios in the same environment used for technical validation. After completing each task, participants provide quantitative feedback.
      </p>
    </Section>
    
    <Notations />
    <ParametersTable />
    
  </main>

  <button
    onClick={scrollToTop}
    className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform transform hover:scale-110"
    aria-label="Scroll to top"
  >
    <ChevronUpIcon />
  </button>
</div>
