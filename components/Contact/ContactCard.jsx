export default function ContactCard({ contact }) {
    const { title, email, number, icon } = contact;
    return (
        <div className="p-6 flex items-start gap-6 card">
            <div className="w-12 h-12 text-white bg-gradient-radial from-accent via-secondary to-primary rounded-lg flex items-center justify-center text-xl">
                {icon}
            </div>
            <div>
                <p className="font-bold">{title}</p>
                <p className="text-gray-700">{email}</p>
                <p className="text-gray-700">{number}</p>
            </div>
        </div>
    );
}
