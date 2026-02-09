import { Metadata } from 'next';
import QucikLinkContent from '@/components/QuickLinkContent';

export const metadata: Metadata = {
    title: "Shop Details Page | NextCommerce Nextjs E-commerce template",
    description: "This is Shop Details Page for NextCommerce Template",
    // other metadata
};


type Props = {
    params: Promise<{
        url_slug: string;
    }>;
};

const QucikLink = async ({ params }: Props) => {

    const { url_slug } = await params;


    return (
        <main>
            <QucikLinkContent url_slug={url_slug} />
        </main>
    );
};

export default QucikLink;