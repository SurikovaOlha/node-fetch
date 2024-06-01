const licenseChecker = require('license-checker');

async function generateLicenseCheckerJson() {
	try {
		const licenseData = await licenseChecker.check({ start: '.', json: true });

		const formattedData = {};
		for (const packageName in licenseData) {
			const { license, url } = licenseData[packageName];
			formattedData[packageName] = { license, url };
		}

		const fs = require('fs');
		fs.writeFileSync('license-checker.json', JSON.stringify(formattedData, null, 2));

		console.log('JSON файл license-checker.json згенеровано!');
	} catch (error) {
		console.error('Помилка під час перевірки ліцензій:', error);
	}
}

generateLicenseCheckerJson();
