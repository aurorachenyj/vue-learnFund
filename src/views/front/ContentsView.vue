<template>
  <div class="full-height mb-5">
    <div class="bg-light py-5">
      <div class="container">
        <div class="row">
          <div class="col-12" v-if="selectArticle.length > 0">
            <h3 class="my-3 fw-bold" data-aos="fade-down">精選文章</h3>

            <div class="row g-4" data-aos="fade-down">
              <div class="col-lg-6">
                <div class="h-100 position-relative">
                  <RouterLink
                    :to="`/article/${selectArticle[0].id}`"
                    class="text-decoration-none"
                  >
                    <div class="overflow-hidden">
                      <div class="ratio ratio-4x3">
                        <img
                          class="img-cover img-hover-enlarge"
                          :src="selectArticle[0].image"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      class="position-absolute bottom-0 start-0 end-0 p-2"
                      style="
                        background: linear-gradient(
                          to top,
                          black,
                          rgba(226, 222, 222, 0.1)
                        );
                      "
                    >
                      <h4 class="text-white fw-bold mb-0 p-2">
                        {{ selectArticle[0].title }}
                      </h4>
                    </div>
                  </RouterLink>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="h-100 d-flex flex-column justify-content-between">
                  <div class="row align-items-center mb-3 g-2">
                    <div class="col-8">
                      <RouterLink
                        :to="`/article/${selectArticle[1].id}`"
                        class="text-decoration-none text-dark"
                      >
                        <h5 class="link-style d-inline-block">
                          {{ selectArticle[1].title }}
                        </h5>

                        <p class="text-muted fs-7" style="">
                          {{ selectArticle[1].description }}
                        </p>
                      </RouterLink>
                    </div>
                    <div class="col-4">
                      <RouterLink
                        :to="`/article/${selectArticle[1].id}`"
                        class="text-decoration-none text-dark"
                      >
                        <div class="overflow-hidden">
                          <div class="ratio ratio-4x3">
                            <img
                              style=""
                              class="img-cover img-hover-enlarge"
                              :src="selectArticle[1].image"
                              alt=""
                            />
                          </div>
                        </div>
                      </RouterLink>
                    </div>
                  </div>

                  <div class="row align-items-center mb-3 g-2">
                    <div class="col-8">
                      <RouterLink
                        :to="`/article/${selectArticle[2].id}`"
                        class="text-decoration-none text-dark"
                      >
                        <h5 class="link-style d-inline-block">
                          {{ selectArticle[2].title }}
                        </h5>
                        <p class="text-muted fs-7">
                          {{ selectArticle[2].description }}
                        </p>
                      </RouterLink>
                    </div>
                    <div class="col-4">
                      <RouterLink
                        :to="`/article/${selectArticle[2].id}`"
                        class="text-decoration-none text-dark"
                        ><div class="overflow-hidden">
                          <div class="ratio ratio-4x3">
                            <img
                              style=""
                              class="img-cover img-hover-enlarge"
                              :src="selectArticle[2].image"
                              alt=""
                            />
                          </div>
                        </div>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-5" data-aos="fade-up">
      <div class="row flex-md-row-reverse gy-3 g-4">
        <div class="col-md-3">
          <div class="sticky-top" style="top: 110px">
            <h4 class="fw-bold mb-3">主題標籤探索</h4>

            <div class="row g-1">
              <div class="col-12" v-if="allarticleTag">
                <div
                  class="card bg-light border-0"
                  style="background-image: url(./img/content-bg.png)"
                >
                  <div class="card-body">
                    <a
                      @click.prevent="searchTagArticle(tag)"
                      v-for="tag in allarticleTag"
                      :key="tag + 'jojo'"
                      href=""
                      class="m-1 badge text-decoration-none rounded-pill fs-7 hover-bg-primary"
                      >#{{ tag }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-9">
          <div
            v-if="clickTagData.length > 0"
            class="mb-5 border rounded p-3 border-primary border-top-0 border-bottom-0"
          >
            <h4 class="fw-bold mb-3">
              關鍵字探索文章
              <span class="text-primary"> #{{ showTargetTag }} </span>
            </h4>
            <div
              class="row align-items-center g-3 border-bottom py-3"
              v-for="clickArticle in clickTagData"
              :key="clickArticle.id"
            >
              <div class="col-4">
                <RouterLink
                  :to="`/article/${clickArticle.id}`"
                  class="text-decoration-none"
                  ><div class="overflow-hidden">
                    <div class="ratio ratio-4x3">
                      <img
                        style=""
                        class="img-cover img-hover-enlarge"
                        :src="clickArticle.image"
                        alt=""
                      />
                    </div>
                  </div>
                </RouterLink>
              </div>
              <div class="col-8">
                <RouterLink
                  :to="`/article/${clickArticle.id}`"
                  class="text-decoration-none text-dark"
                >
                  <span
                    v-for="singleTag in clickArticle.tag"
                    :key="singleTag + 'yoyo'"
                    class="badge bg-light text-muted me-2 mb-2 border-bottom"
                  >
                    {{ singleTag }}
                  </span>

                  <h5>{{ clickArticle.title }}</h5>
                  <p class="d-none d-md-block text-muted">
                    {{ clickArticle.description }}
                  </p>
                  <span class="me-4"
                    ><i class="bi bi-person-vcard me-2"></i
                    >{{ clickArticle.author }}
                  </span>
                  <span>
                    <i class="bi bi-calendar2-week me-2"></i>
                    {{ switchTime(clickArticle.create_at) }}
                  </span>
                </RouterLink>
              </div>
            </div>
          </div>

          <h4 class="fw-bold my-3">最新文章</h4>

          <div
            class="row align-items-center g-3 border-bottom py-3"
            v-for="article in articleListData.articles"
            :key="article.id"
          >
            <div class="col-4">
              <RouterLink
                :to="`/article/${article.id}`"
                class="text-decoration-none"
                ><div class="overflow-hidden">
                  <div class="ratio ratio-4x3 hoverItem">
                    <img
                      style=""
                      class="img-cover img-hover-enlarge"
                      :src="article.image"
                      alt=""
                    />
                  </div>
                </div>
              </RouterLink>
            </div>
            <div class="col-8">
              <RouterLink
                :to="`/article/${article.id}`"
                class="text-decoration-none text-dark hoverItem"
              >
                <!-- <div> -->
                <span
                  v-for="singleTag in article.tag"
                  :key="singleTag + 'yoyo'"
                  class="badge bg-light text-muted me-2 mb-2 border-bottom"
                >
                  {{ singleTag }}
                </span>
                <br />
                <h5 class="d-inline-block link-style">{{ article.title }}</h5>
                <br />
                <p class="d-none d-md-block text-muted">
                  {{ article.description }}
                </p>
                <span class="me-2"
                  ><i class="bi bi-person-vcard me-2"></i>{{ article.author }}
                </span>
                <span>
                  <!-- <i class="bi bi-calendar2-week me-2"></i> -->
                  {{ switchTime(article.create_at) }}
                </span>
                <!-- </div> -->
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav aria-label="Page navigation " v-if="articleListData.pagination">
      <ul class="pagination justify-content-center">
        <li
          class="page-item"
          :class="{ disabled: !articleListData.pagination.has_pre }"
          @click.prevent="changePage(currentPage - 1)"
        >
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li
          class="page-item"
          v-for="i in articleListData.pagination.total_pages"
          :key="i + 'jojo'"
          @click.prevent="changePage(i)"
          :class="{ active: i === currentPage }"
        >
          <a class="page-link" href="#">{{ i }}</a>
        </li>

        <li
          class="page-item"
          :class="{ disabled: !articleListData.pagination.has_next }"
          @click.prevent="changePage(currentPage + 1)"
        >
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- 分頁 -->
  </div>

  <!-- tag點擊 -->
</template>

<script>
import axios from "axios";
import { toRaw } from "vue";
// import Toast from "../../utils/Toast";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      articleListData: {},
      currentPage: 1,
      totalPage: 1,
      allarticleListData: [],
      allarticleTag: [],
      clickTagData: [],
      showTargetTag: "",
      selectArticle: [],
    };
  },
  mounted() {
    this.getArticleList();
  },

  // computed: {
  //   sortArticle() {
  //     console.log(this.articleListData);
  //     // const sortArr = this.articleListData.articles.sort((a, b) => {
  //     //   return a.create_at - b.create_at;
  //     // });

  //     // console.log(sortArr);
  //     // return sortArr;
  //   },
  // },

  watch: {
    currentPage() {
      this.getArticleList(this.currentPage);
    },

    totalPage() {
      this.getAllArticleList(this.totalPage);
    },
  },

  methods: {
    searchTagArticle(targetTag) {
      window.scrollTo(0, 400);

      if (window.screen.width <= 992) {
        window.scrollTo(0, 800);
      } else if (window.screen.width <= 768) {
        window.scrollTo(0, 1000);
      }

      this.showTargetTag = targetTag;

      const arr = this.allarticleListData.filter((item) => {
        // console.log(item);
        if (item.tag.includes(targetTag)) {
          return item;
        }
      });

      this.clickTagData = [...toRaw(arr)];
    },

    getAllArticleList(page) {
      const pageArr = [];
      for (let i = 1; i <= page; i++) {
        pageArr.push(i);
      }

      const apiArr = pageArr.map((item) => {
        return axios.get(
          `${VITE_APP_URL}/api/${VITE_APP_PATH}/articles?page=${item}`
        );
      });

      Promise.all(apiArr)
        .then((res) => {
          let articleArr = [];
          res.forEach((item) => {
            articleArr.push(item.data.articles);
          });

          // console.log(this.allarticleListData);

          this.allarticleListData = [...toRaw(articleArr)].flat();

          const allTag = [];
          this.allarticleListData.forEach((item) => {
            item.tag.forEach((i) => {
              if (!allTag.includes(i)) {
                allTag.push(i);
              }
            });
          });

          this.allarticleTag = allTag;
          // console.log(allTag);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    switchTime(timeStamp) {
      const nowDate = new Date(timeStamp * 1000).toLocaleDateString();
      return nowDate;
    },

    changePage(page) {
      this.currentPage = page;
    },

    getArticleList(page = 1) {
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/articles?page=${page}`)
        .then((res) => {
          this.articleListData = res.data;

          const hotArticle = [];
          if (res.data.articles.length >= 3) {
            for (let i = 0; i <= 2; i++) {
              hotArticle.push(res.data.articles[i]);
            }
            // console.log(hotArticle);
            this.selectArticle = hotArticle;
          }

          this.articleListData.articles = res.data.articles.sort((a, b) => {
            return b.create_at - a.create_at;
          });

          this.currentPage = res.data.pagination.current_page;
          this.totalPage = res.data.pagination.total_pages;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
