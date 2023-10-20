import parse from 'html-react-parser';

const ArtistContainerPage = ({ content }: { content: any }) => {
    const siteUrl = content?.Url?.substring(0, content?.Url.length - 1 - (content?.RelativePath?.length ?? 0)) ?? '';

    return (
        <div className="row">
            <h3 className="mb-3">{content?.Name}</h3>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="list-group list-group-flush">
                    <strong className="facet-title">Artist Genre</strong>
                    <select id='artistGenre' className="form-select">
                        <option>All</option>
                        {content.artists?.ArtistDetailsPage?.facets?.ArtistGenre?.map((artistGenreFacet: any) => {
                            return (
                                <option value={artistGenreFacet?.name?.toString()}>
                                    {artistGenreFacet?.name} ({artistGenreFacet?.count})
                                </option>
                            )
                        })}
                    </select>
                </div>

                <div className="list-group list-group-flush">
                    <strong className="facet-title">Stage Name</strong>
                    <select id='stageName' className="form-select">
                        <option value=''>All</option>
                        {content.artists?.ArtistDetailsPage?.facets?.StageName?.map((stageNameFacet: any) => {
                            return (
                                <option value={stageNameFacet?.name?.toString()}>
                                    {stageNameFacet?.name} ({stageNameFacet?.count})
                                </option>
                            )
                        })}
                    </select>
                </div>
            </div>

            {content.artists?.ArtistDetailsPage?.items?.map((artistDetailsPage: any, artistDetailsPageIdx: number) => {
                return (
                    <div className="card mb-3">
                        <div className="row g-0" key={artistDetailsPageIdx}>
                            <div className="col-md-4">
                                {(() => {
                                    if (artistDetailsPage?.ArtistPhoto && artistDetailsPage.ArtistPhoto.length > 0) {
                                        return (
                                            <img src={siteUrl + artistDetailsPage?.ArtistPhoto} className="img-fluid rounded-start" alt={artistDetailsPage?.ArtistName ?? ''} />
                                        )
                                    }
                                })()}
                            </div>
                            <div className="col-md-8">

                                <div className="card-body">
                                    <div className="card-text">{artistDetailsPage?.ArtistGenre} - {artistDetailsPage?.StageName}</div>
                                    <h5 className="card-title"><a href={artistDetailsPage?.RelativePath ?? ''}>{artistDetailsPage?.ArtistName}</a></h5>
                                    <div className="card-text">{parse(artistDetailsPage?.ArtistDescription ?? '')}</div>
                                    <p className="card-text"><small className="text-muted">{artistDetailsPage?.PerformanceStartTime} - {artistDetailsPage?.PerformanceEndTime}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default ArtistContainerPage;