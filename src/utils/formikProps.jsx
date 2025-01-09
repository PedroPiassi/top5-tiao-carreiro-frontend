import _ from 'lodash';
import moment from 'moment';

export const formikProps = (field, formik) => ({
    name: field,
    value: getValue(field, formik),
    onChange: (event) => {
        // Forçar set touched para validações
        const touched = formik.touched;
        _.set(touched, field, true);
        formik.setTouched(touched);

        // Verifica o tipo do event e seta o valor no formik
        switch (true) {
            case event instanceof moment:
            case typeof event === 'string':
                formik.setFieldValue(field, event);
                return;
            case event.nativeEvent instanceof Event:
            case event instanceof PointerEvent:
            case event instanceof KeyboardEvent:
                formik.setFieldValue(field, event.target.value);
                return;
            default:
                console.warn(`formikProps não está preparado para lidar com esse tipo de evento. (${event.constructor.name})`);
        }
    },
    onBlur: formik.handleBlur,
    error: getTouched(field, formik) && Boolean(getErrors(field, formik)),
    helperText: getTouched(field, formik) && <>{getErrors(field, formik)}</>
});

export const getValue = (fieldName, formik) => _.get(formik.values, fieldName) ?? '';
const getTouched = (fieldName, formik) => _.get(formik.touched, fieldName);
export const getErrors = (fieldName, formik) => _.get(formik.errors, fieldName);
