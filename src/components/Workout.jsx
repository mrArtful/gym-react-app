import ExerciseCard from "./ExerciseCard"
import SectionWrapper from "./SectionWrapper"

export default function Workout({ workout }) {
  return (
    <SectionWrapper
        id={'workout'}
      header={"Welcome to"}
      title={["The", "DANGER", "zone"]}
    >
        <div className="flex flex-col gap-4">
            {workout.map((exercise, i) => {
                return (
                    <ExerciseCard index={i} exercise={exercise} key={i} />
                )
            })}
        </div>
    </SectionWrapper>
  )
}
