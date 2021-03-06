export class ScanSession {

	constructor(allRecognizedCodes, newlyRecognizedCodes, newlyLocalizedCodes, parsed) {
		this.allRecognizedCodes = allRecognizedCodes;
		this.newlyRecognizedCodes = newlyRecognizedCodes;
		this.newlyLocalizedCodes = newlyLocalizedCodes;
		this.shouldPause = false;
		this.shouldStop = false;
		this.rejectedCodes = [];
		this.parsed = parsed;
	}

	pauseScanning() {
		this.shouldPause = true;
	}

	stopScanning() {
		this.shouldStop = true;
	}

	rejectCode(barcode) {
		this.rejectedCodes.push(barcode.id);
	}

}
