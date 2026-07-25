import Image from "next/image";

export default function NewsFeed() {
  return (
    <section className="section-services pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title text-center mb-4">
              <h2 className="text-uppercase">NEWS FEED</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <a href="/news-release" className="article-box featured">
              <div className="article-image">
                <Image
                  src="/images/news1.CNDsRfjQ.png"
                  alt=""
                  width={400}
                  height={500}
                  className="img-fluid"
                />
              </div>
              <div className="article-content" />
            </a>
          </div>
          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-6">
                <a href="/news-release" className="article-box">
                  <div className="article-image">
                    <Image
                      src="/images/new1.CXOmsBjS.jpg"
                      alt=""
                      width={400}
                      height={320}
                      className="img-fluid"
                    />
                  </div>
                  <div className="article-content">
                    <h3>BAIC RANDED 192ND IN FORTUNE GLOBAL 500.</h3>
                  </div>
                </a>
              </div>
              <div className="col-sm-6">
                <a href="/news-release" className="article-box">
                  <div className="article-image">
                    <Image
                      src="/images/smart.DdB_qSp-.png"
                      alt=""
                      width={400}
                      height={320}
                      className="img-fluid"
                    />
                  </div>
                  <div className="article-content">
                    <h3>SMART BAIC, &apos;STEADY&apos;.</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <a href="/news-release" className="article-box">
                  <div className="article-image">
                    <Image
                      src="/images/news2.NDhq1-wv.png"
                      alt=""
                      width={800}
                      height={320}
                      className="img-fluid"
                    />
                  </div>
                  <div className="article-content" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
