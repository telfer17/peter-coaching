import { Eyebrow } from "@/components/ds/Eyebrow";

/** First-person launch note from Peter — sits under the verified career bio on the About page. */
export function WhyICoach() {
  return (
    <section style={{ background: "var(--bg-page)", padding: "84px 0" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 24px" }}>
        <Eyebrow>A note from Peter</Eyebrow>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 42,
            lineHeight: 1.04,
            color: "var(--text-strong)",
            margin: "14px 0 0",
          }}
        >
          Why I Coach
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--text-body)", margin: "20px 0 0", maxWidth: 760 }}>
          After years of thinking about it, planning it and talking about it, I&apos;m delighted to finally
          launch Momentum Coaching. Football has given me so much across more than 20 years in the game, and
          I&apos;m passionate about passing on the knowledge, experience and lessons I&apos;ve learned to the
          next generation.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--text-body)", margin: "14px 0 0", maxWidth: 760 }}>
          Whatever your age or ability, my aim is to help you develop your skills, your confidence and your
          love for the game — working hard, improving, and above all enjoying your football. Let&apos;s build
          momentum together.
        </p>
      </div>
    </section>
  );
}
