export const TableOfContents = ({ toc }) => {
    return (
        <div>
            <p className="TableOfContentsHead">目次</p>
            <ul>
                {toc.map(data => (
                    <li key={data.id}>
                        <a href={`#${data.id}`}>
                            {data.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};