import Calendar from 'rsuite/Calendar';
import HStack from 'rsuite/HStack';
import Divider from 'rsuite/Divider'

export const CalendarPage = () => {
    return (
        <>
            <HStack wrap divider={<Divider vertical />} spacing={10} style={{ height: 300 }}>
            <Calendar
                compact
                style={{ width: 300 }}
            />
            </HStack>
        </>
    );
};
