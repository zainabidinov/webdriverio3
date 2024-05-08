class GoogleCloudComponents {
  async setNumberOfInstances(number) {
    await $('#c11').setValue(number);
  }

  async chooseMachineType() {
    await $('//span[text()="Machine type"]/ancestor::div[contains(@class, "O1htCb-H9tDt")]').click();
    await $('//span[text()="n1-standard-8"]/ancestor::li[contains(@class, "MCs1Pd")]').click();
  }

  async addGPUs() {
    await $('button[aria-label="Add GPUs"').click();
  }

  async chooseGPUModel() {
    await $('//span[text()="GPU Model"]/ancestor::div[contains(@class, "MSEcuf")]').click();
    await $('//span[text()="NVIDIA Tesla V100"]/ancestor::li[contains(@class, "MCs1Pd")]').click();
  }

  async chooseLocalSSD() {
    await $('//span[text()="Local SSD"]/ancestor::div[contains(@class, "VfPpkd-O1htCb")]').click();
    await $('//span[text()="2x375 GB"]/ancestor::li[contains(@class, "MCs1Pd")]').click();
  }

  async chooseCommittedUseDiscountOptions() {
    await $('//label[text()="1 year"]/ancestor::div[contains(@class, "e2WL2b")]').click();
  }

  async clickAddToEstimate() {
    await $('//span[text()="Add to estimate"]').click();
  }
}

module.exports = GoogleCloudComponents;
