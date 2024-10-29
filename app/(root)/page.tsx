import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "John" },
      _id: 1,
      description: "This is a description",
      image: "https://private-user-images.githubusercontent.com/151519281/374017123-471e2baa-8781-43b8-aaed-62e313d03e99.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzAxNzkzOTEsIm5iZiI6MTczMDE3OTA5MSwicGF0aCI6Ii8xNTE1MTkyODEvMzc0MDE3MTIzLTQ3MWUyYmFhLTg3ODEtNDNiOC1hYWVkLTYyZTMxM2QwM2U5OS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMDI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTAyOVQwNTE4MTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jNmNjZGI1MzA0Y2MxNTEzMjliZGRjMjZiZDZlMGE4YjZkZDA5Njg0NDc1ODg1MGFjMzdhYzY4NWQ2NDY4MGU3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.X4iuiSMr08QV6O-i0nhOGhlO27hiSkAzPZibL11cPmE",
      category: "Robots",
      title: "We Robots",
    },
  ]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup, <br /> Connect with Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions.</p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  )
}