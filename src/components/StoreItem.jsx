import { Card } from "react-bootstrap"

export const StoreItem = ({ id, name, price, imgUrl }) => {
    return (
        <Card>
            <Card.Img
            variant="top"
            src={imgUrl}
            height="400px"
            style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column" />
                <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
                    <span className="fs-3 ms-3">{name}</span>
                    <span className="ms-2 text-muted">{price}</span>
                </Card.Title>
        </Card>
    );
};