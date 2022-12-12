import Tippy from '@tippyjs/react/headless';
import CalendarPopper from '../CalendarPopper';

function PopperWrapper({ calendarPopper, onDispatch, children, placement = 'bottom-start' }) {
    return (
        <div>
            <Tippy
                interactive
                trigger="click"
                placement={placement}
                render={(attrs) => (
                    <div
                        className="overflow-x-hidden overflow-y-auto max-h-[min((100vh-96px)-60px,734px)] rounded-lg shadow-[0_0_20px_0_rgba(44,104,144,0.5)] min-w-[24rem] py-2 px-3 bg-white"
                        tabIndex="-1"
                        {...attrs}
                    >
                        {calendarPopper && <CalendarPopper onDispatch={onDispatch} />}
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default PopperWrapper;
