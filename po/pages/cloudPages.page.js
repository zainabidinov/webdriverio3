class GoogleCloudPages {
  async openLandingPage() {
    await browser.url('https://cloud.google.com/');
  }

  async searchFor(text) {
    await $('.YSM5S').click();
    await $('#i4').setValue(text);
    await $('i[aria-label="Search"]').click();
  }

  async clickFirstSearchResult() {
    await $('a[href="https://cloud.google.com/products/calculator"]').click();
  }

  async clickAddToEstimateButton() {
    await $(".UywwFc-vQzf8d").click();
  }
}

module.exports = GoogleCloudPages;
