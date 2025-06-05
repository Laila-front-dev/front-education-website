import qs from "qs";
import { getStapiUrl } from "@/utils/get-strapi-url";
import { fetchAPI } from "@/utils/fetch-api";

const BASE_URL = getStapiUrl();
const BLOG_PAGE_SIZE = 9; // Number of items per page for blog pagination

const globalSettingsQuery = qs.stringify({
  populate: {
    header: {
      on: {
        "layout.top-header": {
          populate: {
            contactInfo: {
              fields: ["text"],
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
            socialMedia: {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
          },
        },
        "layout.nav-header": {
          populate: {
            logo: {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
            navbar: true,
            cta: true,
          },
        },
      },
    },
    Footer: {
      populate: {
        logo: {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
          },
        },
        socialMedia: {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
          },
        },
        links: {
          populate: {
            navbar: true,
          },
        },
      },
    },
  },
});

export async function getGlobalSetttings() {
  const path = "/api/global";
  const url = new URL(path, BASE_URL);
  url.search = globalSettingsQuery;
  return await fetchAPI(url.href, { method: "GET" });
}

const blogsSettingsQuery = qs.stringify({
  populate: {
    main: {
      on: {
        "blocks.hero-section": {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
            background: {
              fields: ["url", "alternativeText"],
            },
            cta: true,
          },
        },
        "blocks.categories": {
          populate: {
            nameCategories: {
              fields: ["text"],
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
          },
        },
      },
    },
  },
});

const blogsSettingQuery = qs.stringify({
  populate: {
    main: {
      on: {
        "blocks.about-us": {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
            cta: true,
            content: true,
          },
        },
        "blocks.choose-us": {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
            content: true,
          },
        },
        "blocks.statistics": {
          populate: {
            Statistics: {
              populate: {
                icon: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
          },
        },
        "blocks.testimonial": {
          populate: {
            testimonial: true,
          },
        },
        "blocks.coose-your-carrer": {
          populate: {
            discover: {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
                cta: true,
              },
            },
          },
        },
      },
    },
  },
});
const SubscribeSettingQuery = qs.stringify({
  populate: {
    main: {
      on: {
        "blocks.subscribe": {
          populate: true,
        },
      },
    },
  },
});

export async function getBlogsSetttings() {
  const path = "/api/home-page";
  const url = new URL(path, BASE_URL);
  url.search = blogsSettingsQuery;
  return await fetchAPI(url.href, { method: "GET" });
}

export async function getBlogSetttings() {
  const path = "/api/home-page";
  const url = new URL(path, BASE_URL);
  url.search = blogsSettingQuery;
  return await fetchAPI(url.href, { method: "GET" });
}

export async function getSubscribeSetttings() {
  const path = "/api/home-page";
  const url = new URL(path, BASE_URL);
  url.search = SubscribeSettingQuery;
  return await fetchAPI(url.href, { method: "GET" });
}

const pageBySlugQuery = (slug: string, includeSkillsTags: boolean = false) =>
  qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      blocks: {
        on: {
          "blocks.contact": {
            populate: {
              contact: {
                populate: {
                  image: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
            },
          },
          "blocks.about-us": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              cta: true,
              content: true,
            },
          },
          "blocks.teacher": {
            populate: {
              teacher: {
                populate: {
                  image: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
            },
          },
          "blocks.statistics": {
            populate: {
              Statistics: {
                populate: {
                  icon: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
            },
          },
          "blocks.testimonial": {
            populate: {
              testimonial: true,
            },
          },
          "blocks.faq": {
            populate: {
              questions: true,
            },
          },
          "blocks.terms-of-service": {
            populate: true,
          },
          "blocks.privacy-policy": {
            populate: true,
          },
          "blocks.pricing": {
            populate: {
              priceList: {
                populate: {
                  list: true,
                  cta: true,
                },
              },
            },
          },
        },
      },
      ...(includeSkillsTags && { skillsTags: { fields: ["id", "name"] } }),
    },
  });

export async function getPageBySlug(
  slug: string,
  includeSkillsTags: boolean = false
) {
  const path = "/api/pages";
  const url = new URL(path, BASE_URL);
  url.search = pageBySlugQuery(slug, includeSkillsTags);
  return fetchAPI(url.href, { method: "GET" });
}

export async function getContent(
  path: string,
  featured?: boolean,
  includeSkillsTags: boolean = false,
  query?: string,
  page?: string
) {
  const url = new URL(path, BASE_URL);

  url.search = qs.stringify({
    sort: ["createdAt:desc"],
    filters: {
      $or: [
        { title: { $containsi: query } },
        { description: { $containsi: query } },
      ],
      ...(featured && { featured: { $eq: featured } }),
    },
    pagination: {
      pageSize: BLOG_PAGE_SIZE,
      page: parseInt(page || "1"),
    },
    populate: {
      image: {
        fields: ["url", "alternativeText"],
      },
      ...(includeSkillsTags && { skillsTags: { fields: ["id", "name"] } }),
    },
  });

  return fetchAPI(url.href, { method: "GET" });
}

const blogPopulate = {
  blocks: {
    on: {
      "blocks.paragraph": {
        populate: true,
      },
      "blocks.heading": {
        populate: true,
      },
      "blocks.full-image": {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      "blocks.overview": {
        populate: true,
      },
      "blocks.curriculum": {
        populate: true,
      },
      "blocks.instructor": {
        populate: true,
      },
    },
  },
};

export async function getContentBySlug(
  slug: string,
  path: string,
  includeSkillsTags: boolean = false
) {
  const url = new URL(path, BASE_URL);
  url.search = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      image: {
        fields: ["url", "alternativeText"],
      },
      ...blogPopulate,
      ...(includeSkillsTags && { skillsTags: { fields: ["id", "name"] } }),
    },
  });

  return fetchAPI(url.href, { method: "GET" });
}
