export default function LinkItem({text, url}) {
    return (
        <a className="bg-[#030303] text-lg font-normal cursor-pointer hover:text-[#0053ff]" href={url}>{text}</a>
    )
}