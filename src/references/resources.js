/**
 * @source https://webservices.amazon.com/paapi5/documentation/get-items.html#resources-parameter
 */

const items = {
  BrowseNodeInfo: {
    BrowseNodes: 'BrowseNodeInfo.BrowseNodes',
    Ancestor: 'BrowseNodeInfo.BrowseNodes.Ancestor',
    SalesRank: 'BrowseNodeInfo.BrowseNodes.SalesRank',
    WebsiteSalesRank: 'BrowseNodeInfo.WebsiteSalesRank'
  },
  Images: {
    Primary: {
      Small: 'Images.Primary.Small',
      Medium: 'Images.Primary.Medium',
      Large: 'Images.Primary.Large',
    },
    Variants: {
      Small: 'Images.Variants.Small',
      Medium: 'Images.Variants.Medium',
      Large: 'Images.Variants.Large'
    }
  },
  ItemInfo: {
    ByLineInfo: 'ItemInfo.ByLineInfo',
    Classifications: 'ItemInfo.Classifications',
    ContentInfo: 'ItemInfo.ContentInfo',
    ContentRating: 'ItemInfo.ContentRating',
    ExternalIds: 'ItemInfo.ExternalIds',
    Features: 'ItemInfo.Features',
    ManufactureInfo: 'ItemInfo.ManufactureInfo',
    ProductInfo: 'ItemInfo.ProductInfo',
    TechnicalInfo: 'ItemInfo.TechnicalInfo',
    Title: 'ItemInfo.Title',
    TradeInInfo: 'ItemInfo.TradeInInfo',
  },
  Offers: {
    Listings: {
      Availability: {
        MaxOrderQuantity: 'Offers.Listings.Availability.MaxOrderQuantity',
        Message: 'Offers.Listings.Availability.Message',
        MinOrderQuantity: 'Offers.Listings.Availability.MinOrderQuantity',
        Type: 'Offers.Listings.Availability.Type',
      },
      Condition: 'Offers.Listings.Condition',
      SubCondition: 'Offers.Listings.Condition.SubCondition',
      DeliveryInfo: {
        IsAmazonFulfilled: 'Offers.Listings.DeliveryInfo.IsAmazonFulfilled',
        IsFreeShippingEligible: 'Offers.Listings.DeliveryInfo.IsFreeShippingEligible',
        IsPrimeEligible: 'Offers.Listings.DeliveryInfo.IsPrimeEligible',
      },
      MerchantInfo: 'Offers.Listings.MerchantInfo',
      IsBuyBoxWinner: 'Offers.Listings.IsBuyBoxWinner',
      LoyaltyPoints: {
        Points: 'Offers.Listings.LoyaltyPoints.Points'
      },
      Price: 'Offers.Listings.Price',
      ProgramEligibility: {
        IsPrimeExclusive: 'Offers.Listings.ProgramEligibility.IsPrimeExclusive',
        IsPrimePantry: 'Offers.Listings.ProgramEligibility.IsPrimePantry'
      },
      Promotions: 'Offers.Listings.Promotions',
      SavingBasis: 'Offers.Listings.SavingBasis'
    },
    Summaries: {
      HighestPrice: 'Offers.Summaries.HighestPrice',
      LowestPrice: 'Offers.Summaries.LowestPrice',
      OfferCount: 'Offers.Summaries.OfferCount'
    }
  },
  ParentASIN: 'ParentASIN'
}

const resources = {
  getAll: [
    items.BrowseNodeInfo.BrowseNodes,
    items.BrowseNodeInfo.Ancestor,
    items.BrowseNodeInfo.SalesRank,
    items.BrowseNodeInfo.WebsiteSalesRank,
    items.Images.Primary.Small,
    items.Images.Primary.Medium,
    items.Images.Primary.Large,
    items.Images.Variants.Small,
    items.Images.Variants.Medium,
    items.Images.Variants.Large,
    items.ItemInfo.Title,
    items.ItemInfo.ByLineInfo,
    items.ItemInfo.Classifications,
    items.ItemInfo.ContentInfo,
    items.ItemInfo.ContentRating,
    items.ItemInfo.ExternalIds,
    items.ItemInfo.Features,
    items.ItemInfo.ManufactureInfo,
    items.ItemInfo.ProductInfo,
    items.ItemInfo.TechnicalInfo,
    items.ItemInfo.TradeInInfo,
    items.ParentASIN
  ],

  getParentAsin: [
    items.ParentASIN
  ],

  getItemInfo: [
    items.ItemInfo.Title,
    items.ItemInfo.ByLineInfo,
    items.ItemInfo.Classifications,
    items.ItemInfo.ContentInfo,
    items.ItemInfo.ContentRating,
    items.ItemInfo.ExternalIds,
    items.ItemInfo.Features,
    items.ItemInfo.ManufactureInfo,
    items.ItemInfo.ProductInfo,
    items.ItemInfo.TechnicalInfo,
    items.ItemInfo.TradeInInfo,
    items.ParentASIN
  ],

  getBrowserNodeInfo: [
    items.BrowseNodeInfo.BrowseNodes,
    items.BrowseNodeInfo.Ancestor,
    items.BrowseNodeInfo.SalesRank,
    items.BrowseNodeInfo.WebsiteSalesRank
  ],

  getImagesPrimary: [
    items.Images.Primary.Small,
    items.Images.Primary.Medium,
    items.Images.Primary.Large
  ],

  getImagesVariants: [
    items.Images.Variants.Small,
    items.Images.Variants.Medium,
    items.Images.Variants.Large
  ],

  getVariationSummary: [
    'VariationSummary.Price.HighestPrice',
    'VariationSummary.Price.LowestPrice',
    'VariationSummary.VariationDimension'
  ],

  getBrowserNodes: [
    'BrowseNodes.Ancestor',
    'BrowseNodes.Children'
  ]

}

module.exports = resources
