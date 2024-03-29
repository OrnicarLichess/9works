import Layout from 'components/Layout';
import BigButton from 'components/BigButton';
import ExternalLink from 'components/ExternalLink';
import ImageWithDescription from 'components/ImageWithDescription';
import drongoBird from 'public/images/A_flying_greater_racket-tailed_drongo.jpeg';

export default function NotFound() {
    const heading = (
        <>
            <span className="text-pink-700">418</span> - i'm a teapot
        </>
    );

    return (
        <Layout
            heading={heading}
            metadata={{ title: "418 - i'm a teapot @ 9works" }}
        >
            <blockquote className="mb-8">
                <div className="mb-5">
                    Why stick with a generic 404 Not Found page, when you could
                    just{' '}
                    <ExternalLink href="https://www.natureinfocus.in/environment/unraveling-the-mysteries-of-nature-s-symphony">
                        <span className="md:underline underline-offset-4">
                            Unraveling The Mysteries Of Nature's Symphony
                        </span>
                    </ExternalLink>{' '}
                    ? – hence{' '}
                    <span className="font-logo align-middle tracking-wider text-sm">
                        418 - i'm a teapot
                    </span>
                </div>
                <div className="mb-5">
                    It seems you've found something that used to exist, or you
                    spelled something wrong. I'm guessing you{' '}
                    <span className="md:underline underline-offset-4">
                        spelled something wrong
                    </span>
                    . Can you double check that URL?
                </div>
                <div>
                    So, any attempt to brew coffee or milk with a teapot should
                    result in the error code "418 I'm a teapot". The resulting
                    entity body may be short and stout.{' '}
                    <ExternalLink href="https://httpstatuses.com/418">
                        <span className="md:underline underline-offset-4">
                            More info.
                        </span>
                    </ExternalLink>
                </div>
            </blockquote>
            <BigButton href="/" className="w-64 mx-auto mb-10">
                Home Page
            </BigButton>
            <div className="">
                <ImageWithDescription
                    src={drongoBird}
                    placeholder="blur"
                    alt="A Flying Great Racket-tailed Drongo by Md Shahanshah Bappy"
                    width={800}
                    height={450}
                    description="The Great Racket-tailed Drongo is a beautiful songster and an excellent mimic. Photograph courtesy Md Shahanshah Bappy under the CC BY-SA 4.0 license."
                />
            </div>
            <BigButton href="/projects" className="w-64 mx-auto mt-8 -mb-12">
                My Projects
            </BigButton>
        </Layout>
    );
}
