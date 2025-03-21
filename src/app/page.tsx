import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ background: "#242020" }} className="min-h-screen">
      <div className="container-center-horizontal">
        <div className="home">
          <h1 className="my-bookshelf">MY BOOKSHELF</h1>

          {/* Top Books Section */}
          <div className="overlap-group-container">
            {/* Book 1 */}
            <div className="overlap-group overlap">
              <div className="rectangle-5-1"></div>
              <div className="frame-1">
                <div className="cien-aos-de-soledad">Cien años de soledad</div>
                <p className="cien-aos-de-soledad-1">
                  Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982. Es opinión general que se trata de una obra maestra de la literatura hispanoamericana y universal, y es una de las obras más traducidas y l
                </p>
              </div>
              <Image
                alt="One Hundred Years of Solitude book cover"
                className="image"
                width={200}
                height={300}
                src="https://ext.same-assets.com/3475435719/2093678058.png"
              />
            </div>

            {/* Book 2 */}
            <div className="overlap-group1 overlap">
              <div className="rectangle-5"></div>
              <div className="frame-1">
                <div className="penses">Pensées</div>
                <p className="x-book">
                  There are a few books I choose to keep always by my side at home or have on my kindle when I travel. One of them is Blaise Pascal's Pensees (pronounced as Ponseh) — his meditations on the human condition. Pascal wrote down his thoughts towards the end of life, hoping to publish it as a book, but he didn't live to see the day. Therefore, the Pensees, as it has come down to us, is fragmentary, a rambling collection of penetrating insights that later editors have put together in a readable form. In my opinion, it is the sheer diversity of topics, acute observations of human nature, and the uninhibited flow of the Pensees, that has endeared the book to millions of readers. It definitely has been my source of deep solace and understanding for many years now.
                </p>
              </div>
              <Image
                alt="Pensées book cover"
                className="image"
                width={200}
                height={300}
                src="https://ext.same-assets.com/3475435719/3491709434.png"
              />
            </div>

            {/* Book 3 */}
            <div className="overlap-group2 overlap">
              <div className="rectangle-5"></div>
              <div className="frame-1">
                <div className="philosophy-of-arts">PHILOSOPHY OF ARTS</div>
                <p className="x-book">
                  "This book will take its place as the very best introduction to the subject on the market… Carroll, because of his vast knowledge of the popular arts as well as traditional high arts, both old and new, is able to provide an enormous variety of examples that will speak to a wide audience."
                </p>
              </div>
              <Image
                alt="Philosophy of Arts book cover"
                className="image"
                width={200}
                height={300}
                src="https://ext.same-assets.com/3475435719/207194638.png"
              />
            </div>
          </div>

          {/* Featured Picks Section */}
          <h2 className="category-title featured-category">FEATURED PICKS</h2>
          <div className="flex-row">
            {/* Row 1 */}
            {/* Book Card 1 */}
            <div className="book-card">
              <div className="book-card-inner">
                <div className="book-card-front">
                  <Image
                    alt="The Secret Garden"
                    className="image-1"
                    width={240}
                    height={300}
                    src="https://ext.same-assets.com/3475435719/627580726.png"
                  />
                </div>
                <div className="book-card-back">
                  <div className="book-title">The Secret Garden</div>
                  <div className="book-description">A timeless classic about a young girl who discovers a hidden garden.</div>
                  <div className="book-description">First published in 1911 by Frances Hodgson Burnett.</div>
                  <div className="book-description">A story of rejuvenation and personal growth through nature.</div>
                </div>
              </div>
            </div>

            {/* Book Card 2 */}
            <div className="book-card">
              <div className="book-card-inner">
                <div className="book-card-front">
                  <Image
                    alt="Pride and Prejudice"
                    className="image-1"
                    width={240}
                    height={300}
                    src="https://ext.same-assets.com/3475435719/1941888524.png"
                  />
                </div>
                <div className="book-card-back">
                  <div className="book-title">Pride and Prejudice</div>
                  <div className="book-description">Jane Austen's masterpiece of manners and marriage.</div>
                  <div className="book-description">A witty commentary on social class and love in 19th century England.</div>
                  <div className="book-description">One of the most beloved romantic novels of all time.</div>
                </div>
              </div>
            </div>

            {/* Book Card 3 */}
            <div className="book-card">
              <div className="book-card-inner">
                <div className="book-card-front">
                  <Image
                    alt="The Great Gatsby"
                    className="image-1"
                    width={240}
                    height={300}
                    src="https://ext.same-assets.com/3475435719/2877744223.png"
                  />
                </div>
                <div className="book-card-back">
                  <div className="book-title">The Great Gatsby</div>
                  <div className="book-description">F. Scott Fitzgerald's portrait of the Jazz Age in America.</div>
                  <div className="book-description">A tale of wealth, ambition, love and tragedy in the 1920s.</div>
                  <div className="book-description">Explores the hollow pursuit of the American Dream.</div>
                </div>
              </div>
            </div>

            {/* Book Card 4 */}
            <div className="book-card">
              <div className="book-card-inner">
                <div className="book-card-front">
                  <Image
                    alt="Echoes of Memory"
                    className="image-1"
                    width={240}
                    height={300}
                    src="https://ext.same-assets.com/3475435719/3681551412.png"
                  />
                </div>
                <div className="book-card-back">
                  <div className="book-title">Echoes of Memory</div>
                  <div className="book-description">A poetic exploration of how memories shape identity.</div>
                  <div className="book-description">Interconnected stories spanning generations and continents.</div>
                  <div className="book-description">A meditation on trauma, joy, and family tradition.</div>
                </div>
              </div>
            </div>

            {/* Book Card 5 */}
            <div className="book-card">
              <div className="book-card-inner">
                <div className="book-card-front">
                  <Image
                    alt="1984"
                    className="image-1"
                    width={240}
                    height={300}
                    src="https://ext.same-assets.com/3475435719/617107697.png"
                  />
                </div>
                <div className="book-card-back">
                  <div className="book-title">1984</div>
                  <div className="book-description">George Orwell's dystopian masterpiece about totalitarianism.</div>
                  <div className="book-description">A chilling vision of government surveillance and control.</div>
                  <div className="book-description">A warning about the dangers of power, propaganda, and censorship.</div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            {/* Book Card 6 */}
            <div className="book-card">
              <div className="book-card-inner">
                <div className="book-card-front">
                  <Image
                    alt="Modern Art Theory"
                    className="image-1"
                    width={240}
                    height={300}
                    src="https://ext.same-assets.com/3475435719/1148749360.png"
                  />
                </div>
                <div className="book-card-back">
                  <div className="book-title">Modern Art Theory</div>
                  <div className="book-description">An exploration of contemporary artistic movements and philosophies.</div>
                  <div className="book-description">Examines the evolution of art from the 20th century to present day.</div>
                  <div className="book-description">Challenges traditional perspectives on visual expression.</div>
                </div>
              </div>
            </div>

            {/* Book Card 7 */}
            <div className="book-card">
              <div className="book-card-inner">
                <div className="book-card-front">
                  <Image
                    alt="Architecture & Meaning"
                    className="image-1"
                    width={240}
                    height={300}
                    src="https://ext.same-assets.com/3475435719/2365634804.png"
                  />
                </div>
                <div className="book-card-back">
                  <div className="book-title">Architecture & Meaning</div>
                  <div className="book-description">The relationship between built environments and human experience.</div>
                  <div className="book-description">Explores how architectural forms communicate cultural values.</div>
                  <div className="book-description">A comprehensive study of design philosophy across centuries.</div>
                </div>
              </div>
            </div>

            {/* Book Card 8 */}
            <div className="book-card">
              <div className="book-card-inner">
                <div className="book-card-front">
                  <Image
                    alt="The Visual Language"
                    className="image-1"
                    width={240}
                    height={300}
                    src="https://ext.same-assets.com/3475435719/19395790.png"
                  />
                </div>
                <div className="book-card-back">
                  <div className="book-title">The Visual Language</div>
                  <div className="book-description">An analysis of how visual elements create meaning across media.</div>
                  <div className="book-description">Deconstructs color theory, composition, and symbolism.</div>
                  <div className="book-description">Reveals universal patterns in visual communication.</div>
                </div>
              </div>
            </div>

            {/* Book Card 9 */}
            <div className="book-card">
              <div className="book-card-inner">
                <div className="book-card-front">
                  <Image
                    alt="The Infinite Journey"
                    className="image-1"
                    width={240}
                    height={300}
                    src="https://ext.same-assets.com/3475435719/2229978513.png"
                  />
                </div>
                <div className="book-card-back">
                  <div className="book-title">The Infinite Journey</div>
                  <div className="book-description">An adventure tale of self-discovery spanning generations.</div>
                  <div className="book-description">A young woman uncovers mysterious family secrets.</div>
                  <div className="book-description">A journey that changes her understanding of herself and her heritage.</div>
                </div>
              </div>
            </div>

            {/* Book Card 10 */}
            <div className="book-card">
              <div className="book-card-inner">
                <div className="book-card-front">
                  <Image
                    alt="The Silent Observer"
                    className="image-1"
                    width={240}
                    height={300}
                    src="https://ext.same-assets.com/3475435719/3370538796.png"
                  />
                </div>
                <div className="book-card-back">
                  <div className="book-title">The Silent Observer</div>
                  <div className="book-description">A near-future thriller about surveillance and freedom.</div>
                  <div className="book-description">An agent monitoring citizens questions the ethics of his role.</div>
                  <div className="book-description">A resistance movement challenges everything he once believed.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Button */}
      <div id="yourware-buttons-container" style={{ position: "fixed", bottom: "24px", right: "16px", display: "flex", flexDirection: "column", alignItems: "flex-end", color: "rgba(255, 255, 255, 0.9)", zIndex: 999 }}>
        <button style={{ display: "flex", alignItems: "center", height: "36px", padding: "10px 12px 10px 14px", borderRadius: "18px", fontSize: "16px", fontWeight: 500, border: "none", cursor: "pointer", color: "rgba(0, 0, 0, 0.95)", boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 2px 0px, rgba(12, 12, 13, 0.4) 0px 16px 32px -8px", backdropFilter: "blur(15px)", backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
          <div style={{ fontFamily: "Inter", marginLeft: "4px", fontStyle: "normal", fontWeight: 500 }}>Upload</div>
          <div style={{ fontFamily: "Inter", marginLeft: "4px", fontStyle: "italic", fontWeight: 800 }}>YOURWARE</div>
        </button>
      </div>
    </div>
  );
}
