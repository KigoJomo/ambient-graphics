import Link from "next/link";

const TechButton = ({to}) => {
    return (
        <Link href={to} className="tech-button h-32 flex items-center justify-center"></Link>
    )
}

export default TechButton;