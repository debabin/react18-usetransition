import React from "react";
import { Spinner, Toast } from "react-bootstrap";

export const useTimeout = (callback: Function, delay: number) => {
  const callbackRef = React.useRef(callback);

  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  React.useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const id = setTimeout(() => callbackRef.current(), delay);
    return () => clearTimeout(id);
  }, [delay]);
};

interface NotificationProps {
  delayMs?: number;
}

export const Notification: React.FC<NotificationProps> = ({ delayMs = 0 }) => {
  let [isShowing, setIsShowing] = React.useState(!delayMs);
  useTimeout(() => setIsShowing(true), delayMs);

  if (!isShowing) return null;

  return (
    <Toast className="w-100 mt-2">
      <Toast.Header
        closeButton={false}
        className="d-flex justify-content-between"
      >
        <Spinner animation="grow" size="sm" className="mr-2" />
        <div>
          <strong className="me-auto">fetching pokemon</strong>
        </div>
      </Toast.Header>
      <Toast.Body>is pending</Toast.Body>
    </Toast>
  );
};
