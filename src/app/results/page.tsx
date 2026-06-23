import Results from "@/modules/projects/components/results";
import { getProject } from "@/modules/projects/projects.service";

export default async function Page() {
  const res = await getProject("a habit tracker for remote teams");
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
