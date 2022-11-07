import { forwardRef } from 'react';

const ButtonWrapper = forwardRef(({ children, ...props }, ref) => {
    return (
        <button {...props} ref={ref}>
            {children}
        </button>
    );
});

export default ButtonWrapper;
