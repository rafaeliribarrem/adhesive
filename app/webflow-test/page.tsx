"use client";

export default function WebflowTestPage() {
  return (
    <>
      <script src="/webflow/adhesive-cards.js" data-assets-base="" />
      <main style={{ background: "#F3F4F6", minHeight: "100vh", padding: "48px 32px" }}>
        <h1 style={{ fontFamily: "sans-serif", marginBottom: 8, fontSize: 28, fontWeight: 600 }}>
          Webflow Bundle Test
        </h1>
        <p style={{ fontFamily: "sans-serif", color: "#6b7280", marginBottom: 40, fontSize: 14 }}>
          Usando o Web Component <code>&lt;process-card&gt;</code> — igual ao que vai no Webflow.
        </p>

        <h2 style={{ fontFamily: "sans-serif", fontSize: 16, fontWeight: 600, marginBottom: 20, color: "#374151" }}>
          Brand Process
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 48 }}>
          {/* @ts-expect-error web component */}
          <process-card step="1" title="Strategy Call" description="We align with you on your goals, audience, and creative style." animation="strategy-call" />
          {/* @ts-expect-error web component */}
          <process-card step="2" title="Creator Matching" description="You'll receive a carefully curated roster, never a marketplace dump." animation="creator-matching" />
          {/* @ts-expect-error web component */}
          <process-card step="3" title="Outreach & Negotiation" description="We negotiate rates and terms on your behalf." animation="outreach" />
          {/* @ts-expect-error web component */}
          <process-card step="4" title="Samples & Messaging" description="We coordinate product delivery and talking points." animation="samples" />
          {/* @ts-expect-error web component */}
          <process-card step="5" title="Review & Launch" description="You approve the content. We manage timing and delivery." animation="review-launch" />
          {/* @ts-expect-error web component */}
          <process-card step="6" title="Reporting & Scaling" description="We track results and scale your winning partnerships." animation="reporting" />
        </div>

        <h2 style={{ fontFamily: "sans-serif", fontSize: 16, fontWeight: 600, marginBottom: 20, color: "#374151" }}>
          Creator Process
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {/* @ts-expect-error web component */}
          <process-card step="1" title="Onboarding Call" description="15-minute call to learn your goals, audience, and ideal sponsors." animation="onboarding-call" />
          {/* @ts-expect-error web component */}
          <process-card step="2" title="Targeted Brand Pitches" description="We pitch you to brands that fit your content and excite you." animation="sponsorship-pitches" />
          {/* @ts-expect-error web component */}
          <process-card step="3" title="Offers & Negotiations" description="We negotiate fair rates. You approve every offer before signing." animation="creator-offers" />
          {/* @ts-expect-error web component */}
          <process-card step="4" title="Samples and Messaging" description="Get product and talking points 2-4 weeks in advance." animation="creator-samples" />
          {/* @ts-expect-error web component */}
          <process-card step="5" title="Create & Publish" description="Film your ad, we handle approvals, then you post on schedule." animation="creator-review-launch" />
          {/* @ts-expect-error web component */}
          <process-card step="6" title="Payments & Renewals" description="We invoice brands, pay you on time, and secure renewal deals." animation="creator-reporting" />
        </div>
      </main>
    </>
  );
}
