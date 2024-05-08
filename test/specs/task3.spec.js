const GoogleCloudPages = require("../../po/pages/cloudPages.page");
const GoogleCloudComponents = require("../../po/components/CloudComponents.component");

describe("GoogleCloud", () => {
  const pages = new GoogleCloudPages();
  const components = new GoogleCloudComponents();

  beforeEach(async () => {
    await pages.openLandingPage();
  });

  it("should perform Google Cloud functionality", async () => {
    await pages.searchFor("Google Cloud Platform Pricing Calculator");
    await pages.clickFirstSearchResult();
    await pages.clickAddToEstimateButton();
    await components.setNumberOfInstances(4);
    await components.chooseMachineType();
    await components.addGPUs();
    await components.chooseGPUModel();
    await components.chooseLocalSSD();
    await components.chooseCommittedUseDiscountOptions();
    await components.clickAddToEstimate();
  });
});
