import parse from 'html-react-parser';

const LandingPage = ({ content }: { content: any }) => {
    const siteUrl = content?.Url?.substring(0, content?.Url.length - 1 - (content?.RelativePath?.length ?? 0)) ?? '';

    return (
        <div className="row">
            <figure className="figure">
                <img src={siteUrl + content?.HeroImage ?? ''} className="figure-img img-fluid rounded" alt={content?.Title ?? ''} />
                <figcaption className="figure-caption">{content?.Title}</figcaption>
                <figcaption className="text-end">{content?.Subtitle}</figcaption>
            </figure>

            <div className="card text-dark bg-light mb-3">
                <div className="card-header">
                    {content?.BuyTicketBlock?.Heading}
                </div>
                <div className="card-body">
                    {content?.BuyTicketBlock?.Message}
                </div>
            </div>

            {content?.MainContentArea?.map((mainContentAreaItem: any, mainContentAreaItemIdx: number) => {
                return (
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={mainContentAreaItemIdx}>
                        {(() => {
                            const contentItem = mainContentAreaItem?.ContentLink?.Expanded
                            if (contentItem?.__typename === "ContentBlock") {
                                return (
                                    <div className="card h-100">
                                        <h4 className="mb-3">{contentItem?.Title}</h4>
                                        <div className="card-body">
                                            <img src={siteUrl + contentItem?.Image} className="img-fluid rounded-start" alt={contentItem?.Title ?? ''} />
                                        </div>
                                        <div className="card-body">
                                            {parse(contentItem?.Content ?? '')}
                                        </div>
                                    </div>
                                )
                            }
                            if (contentItem?.__typename === "ImageFile") {
                                return (
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <img src={siteUrl + contentItem?.Url} className="img-fluid rounded-start" alt={contentItem?.Url ?? ''} />
                                        </div>
                                    </div>
                                )
                            }
                            return (
                                <div className="card h-100"></div>
                            )
                        })()}
                    </div>
                )
            })}

            {content._children?.ArtistContainerPage?.items?.map((artistContainerPage: any, artistContainerPageIdx: number) => {
                return (
                    <div className="row" key={artistContainerPageIdx}>
                        <div className="text-dark bg-light mb-3">
                            <div className="card-header">
                                <h4><a href={artistContainerPage?.RelativePath ?? ""} >{artistContainerPage?.Name}</a></h4>
                            </div>
                        </div>

                        <div className="card text-dark bg-light mb-3">
                            <div className="card-header">Headlines</div>
                        </div>
                        {artistContainerPage?.headlines?.ArtistDetailsPage?.items?.map((artistDetailsPage: any, artistDetailsPageIdx: number) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={artistDetailsPageIdx}>

                                    <div className="card h-100">
                                        <h4 className="mb-3"><a href={artistDetailsPage?.RelativePath ?? ''}>{artistDetailsPage?.ArtistName}</a></h4>
                                        <div className="card-body">
                                            {parse(artistDetailsPage?.ArtistDescription ?? '')}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default LandingPage;