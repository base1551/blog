export const TableOfContents = ({ toc }) => {
    return (
        <div className="p-3 m-10 bg-gray-100 border border-black border TableOfContentsHead">
            <p >目次</p>
            <ul>
                {toc.map(data => (
                    <li className="pl-2 list-none hover:opacity-75" key={data.id}>
                        <a href={`#${data.id}`}>
                            {data.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};