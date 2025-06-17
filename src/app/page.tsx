import PageTemplate from "@/components/PageTemplate";

export default function Home() {
  return (
    <PageTemplate
      title="Built for Southpaws"
      intro="Strategy breakdowns, drills, gear reviews, and tactical guides designed for left-handed warriors."
      showNewsletter={false}
    >
      {/* You can put content here if needed */}
      <div></div>
    </PageTemplate>
  );
}
