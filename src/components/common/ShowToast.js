import toast from 'react-hot-toast';

const styles = {
	marginTop: '4rem',
	fontSize: '16px',
	fontWeight: '600',
	minWidth: '400px',
	borderRadius: '15px',
};

export const showToast = (type, message) => {
	toast.dismiss();
	toast[type](message, {
		style: styles,
	});
};

export const ShowWarningToast = (message) => {
	toast.dismiss();
	toast(message, {
		style: styles,
		icon: '⚠️',
		duration: 3000,
	});
};
