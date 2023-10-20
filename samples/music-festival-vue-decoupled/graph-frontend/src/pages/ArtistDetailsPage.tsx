import parse from 'html-react-parser';

const ArtistDetailsPage = ({ content }: { content: any }) => {
    const siteUrl = content?.Url?.substring(0, content?.Url.length - 1 - (content?.RelativePath?.length ?? 0)) ?? '';

    return (
        <div className="row">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        {(() => {
                            if (content?.ArtistPhoto && content.ArtistPhoto.length > 0) {
                                return (
                                    <img src={siteUrl + content?.ArtistPhoto} className="img-fluid rounded-start" alt={content?.ArtistName ?? ''} />
                                )
                            }
                        })()}
                    </div>
                    <div className="col-md-8">

                        <div className="card-body">
                            <div className="card-text">{content?.ArtistGenre} - {content?.StageName}</div>
                            <h5 className="card-title"><a href={content?.RelativePath ?? ''}>{content?.ArtistName}</a></h5>
                            <div className="card-text">{parse(content?.ArtistDescription ?? '')}</div>
                            <p className="card-text"><small className="text-muted">{content?.PerformanceStartTime} - {content?.PerformanceEndTime}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistDetailsPage;