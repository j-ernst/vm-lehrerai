export default function Section({ id, title, children }) {
    return (
        <section id={id} className="bg-white text-black shadow-md rounded-lg p-6">
            <h3 className="text-2xl text-black font-semibold mb-4">{title}</h3>
            {children}
        </section>
    );
}
