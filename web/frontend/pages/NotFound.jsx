import { useNavigate } from "@shopify/app-bridge-react";
import { Button, Card, EmptyState, Link, Page } from "@shopify/polaris";
import { notFoundImage } from "../assets";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Page>
      <Card>
        <Card.Section>
          <EmptyState
            heading="There is no page at this address"
            image={notFoundImage}
          >
            <p>
              Check the URL and try again, or use the search bar to find what
              you need.
            </p>
          </EmptyState>
          <Link onClick={() =>  navigate("/")}>Go Back</Link>
        </Card.Section>
      </Card>
    </Page>
  );
}
