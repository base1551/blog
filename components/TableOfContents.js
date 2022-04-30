export const TableOfContents = ({ toc }) => {
    return (
        <div>
            <p className="p-3 m-10 bg-gray-100 border border-black border-dashed TableOfContentsHead">目次</p>
            <ul>
                {toc.map(data => (
                    <li className="p-2 list-decimal list-inside" key={data.id}>
                        <a href={`#${data.id}`}>
                            {data.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};