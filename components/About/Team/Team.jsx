import { team } from "../Data";
import TeamCard from "./TeamCard";

export default function Team() {
    return (
        <section className="container py-16">
            <div className="max-w-xl text-center mx-auto space-y-2.5 -mt-2">
                <h2>Meet our team</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry&apos;s standard dummy.</p>
            </div>

            <div className="mt-8 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {team.map((member, idx) => (
                    <TeamCard key={idx} member={member} />
                ))}
            </div>
        </section>
    );
}
