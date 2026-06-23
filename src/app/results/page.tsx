import Results from "@/modules/projects/components/results";
import { getProject } from "@/modules/projects/projects.service";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    idea?: string;
  }>;
}) {
  const { idea } = await searchParams;
  if (!idea) {
    return <div>Missing idea</div>;
  }
  const res = await getProject(idea);
  if (!res) {
    return <div>Something went wrong</div>;
  }
  const { mvpScope, featuresToCut, concept, starterTasks } = res;
  return (
    <Results
      mvpScope={mvpScope}
      featuresToCut={featuresToCut}
      concept={concept}
      starterTasks={starterTasks}
    />
  );
}
