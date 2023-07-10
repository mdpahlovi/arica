import SecHeader from "@/components/Common/SecHeader";

import TeamCard from "./TeamCard";
import { team } from "@/data/data";

export default function Team() {
    return (
        <section className="container py-16">
            <SecHeader title="Our Team">Team of Professionals</SecHeader>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                {team.map((member, idx) => (
                    <TeamCard key={idx} member={member} />
                ))}
            </div>
        </section>
    );
}
