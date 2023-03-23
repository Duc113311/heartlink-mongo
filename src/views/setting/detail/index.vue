<template>
  <div class="w-full h-full relative bg-theme p-5">
    <div class="w-full h-full">
      <!-- Back -->
      <div class="w-full header-edit flex justify-center items-center">
        <div class="w-full flex justify-center items-center">
          <div class="w-1/4">
            <BhBack @onBackComponent="onBackSetting"></BhBack>
          </div>
          <div class="ml-20 w-3/4 text-xl text-white">Settings</div>
        </div>
      </div>

      <div class="hight-setting overflow-scroll w-full">
        <!--package -->
        <div class="w-full gold-package overflow-scroll mt-3">
          <div class="border-package">
            <carousel
              :per-page="1"
              :mouse-drag="true"
              :autoplay="true"
              :paginationActiveColor="isColorActive"
              :paginationColor="isColor"
            >
              <slide
                data-index="0"
                data-name="MySlideName"
                @slideclick="handleSlideClick"
              >
                <div
                  class="w-full flex justify-center text-center mb-2 dash-packages"
                >
                  <div class="item-package bg-slate-900">
                    <div class="flex justify-center">
                      <img
                        src="@/assets/icon/package/ic_platium_package.svg"
                        alt=""
                      />
                    </div>
                    <div class="mt-2 text-xl">Platinum package</div>
                    <div class="mt-2 text-sm">
                      Level up everyone action you take on HeartLink
                    </div>
                  </div>
                </div>
              </slide>
              <slide
                ><div
                  class="w-full flex justify-center text-center mb-2 dash-packages"
                >
                  <div class="item-package bg-amber-300">
                    <div class="flex justify-center">
                      <img
                        src="@/assets/icon/package/ic_gold_package.svg"
                        alt=""
                      />
                    </div>
                    <div class="mt-2 text-xl">Gold package</div>
                    <div class="mt-2 text-sm">
                      Level up everyone action you take on HeartLink
                    </div>
                  </div>
                </div></slide
              >

              <slide>
                <div
                  class="w-full flex justify-center text-center mb-2 dash-packages"
                >
                  <div class="item-package bg-blue-400">
                    <div class="flex justify-center">
                      <img
                        src="@/assets/icon/package/ic_gold_package.svg"
                        alt=""
                      />
                    </div>
                    <div class="mt-2 text-xl">Gold package</div>
                    <div class="mt-2 text-sm">
                      Level up everyone action you take on HeartLink
                    </div>
                  </div>
                </div></slide
              >
              <slide>
                <div
                  class="w-full flex justify-center text-center mb-2 dash-packages"
                >
                  <div class="item-package bg-zinc-400">
                    <div class="flex justify-center">
                      <img
                        src="@/assets/icon/package/ic_silver_package.svg"
                        alt=""
                      />
                    </div>
                    <div class="mt-2 text-xl">Silver package</div>
                    <div class="mt-2 text-sm">
                      Level up everyone action you take on HeartLink
                    </div>
                  </div>
                </div></slide
              >
              <slide>
                <div
                  class="w-full flex justify-center text-center mb-2 dash-packages"
                >
                  <div class="item-package bg-orange-500">
                    <div class="flex justify-center">
                      <img
                        src="@/assets/icon/package/ic_super_like.svg"
                        alt=""
                      />
                    </div>
                    <div class="mt-2 text-xl">Get Supper Like</div>
                    <div class="mt-2 text-sm">
                      Level up everyone action you take on HeartLink
                    </div>
                  </div>
                </div></slide
              >
              <slide
                ><div
                  class="w-full flex justify-center text-center mb-2 dash-packages"
                >
                  <div class="item-package bg-yellow-500">
                    <div class="flex justify-center">
                      <img src="@/assets/icon/package/ic_boost.svg" alt="" />
                    </div>
                    <div class="mt-2 text-xl">Get Boost Profile</div>
                    <div class="mt-2 text-sm">
                      Level up everyone action you take on HeartLink
                    </div>
                  </div>
                </div></slide
              >
              <slide
                ><div
                  class="w-full flex justify-center text-center mb-2 dash-packages"
                >
                  <div class="item-package bg-teal-400">
                    <div class="flex justify-center">
                      <img
                        src="@/assets/icon/package/ic_read_receipts.svg"
                        alt=""
                      />
                    </div>
                    <div class="mt-2 text-xl">Get Read Receipts</div>
                    <div class="mt-2 text-sm">
                      Level up everyone action you take on HeartLink
                    </div>
                  </div>
                </div></slide
              >
            </carousel>
          </div>
        </div>

        <!-- account setting -->

        <div class="w-full">
          <div class="w-full bh-item-title title-size">Account Settings</div>
          <div class="w-full flex items-center">
            <div class="w-full">
              <div class="w-full flex form-set-input">
                <div class="flex justify-between w-full">
                  <div class="bh-item-title title-item">Phone number</div>
                  <div class="mr-5 flex items-center">
                    <div class="mr-3 title-item bh-text-number">
                      +84962282864
                    </div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
              <div class="w-full flex items-center bh-describe size-describe">
                Secure your account by verifying your phone number
              </div>
            </div>
          </div>
        </div>

        <!-- discovery -->
        <div class="w-full">
          <div class="w-full bh-item-title title-size">Discovery Settings</div>
          <div class="w-full flex items-center">
            <div class="w-full">
              <div class="w-full flex form-set-input">
                <div class="flex justify-between w-full">
                  <div class="bh-item-title title-item">Location</div>
                  <div class="mr-5 flex items-center">
                    <div
                      class="mr-3 bh-text-location"
                      @click="onClickLocation()"
                    >
                      {{ addressLocation }}
                    </div>

                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
              <div class="w-full flex items-center bh-describe size-describe">
                Change your location to see people in other cities
              </div>
            </div>
          </div>
        </div>

        <!-- golbal -->
        <div class="w-full flex justify-center items-center">
          <div class="w-full">
            <div
              class="w-full style-switch form-set-input flex justify-between"
            >
              <div class="name bh-item-title title-item">Golbal</div>

              <div class="mr-3">
                <el-switch
                  v-model="valueGlobal"
                  active-color="#FB5D65"
                  inactive-color="#5F6A86"
                  @el-switch="onChangeGlobal"
                >
                </el-switch>
              </div>
            </div>
            <div class="w-full p-3 bh-describe">
              You can meet people nearby and from around the world
            </div>
          </div>
        </div>

        <div v-show="valueGlobal" class="w-full form-set-list">
          <div class="w-full bh-title title-item form-set-item">
            PREFERRED LANGUAGES
          </div>
          <div class="w-full">
            <div>
              <div
                class="w-full form-set-item bd-input title-input-item bh-item-title"
              >
                English
              </div>
              <div
                class="w-full form-set-item bd-input title-input-item bh-item-title"
              >
                Vietnamese
              </div>
            </div>
            <div>
              <div class="bh-text-location form-set-item w-full">
                Add language...
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mt-6">
          <div class="form-set-list">
            <div class="w-full flex justify-between items-center">
              <div class="bh-title title-item form-set-item">
                MAXIMUM DISTANCE
              </div>
              <div class="bh-describe">{{ valueLocation }}km</div>
            </div>

            <div>
              <el-slider
                v-model="valueLocation"
                @change="onChangeLocations"
              ></el-slider>
            </div>
            <div class="flex justify-between w-full mt-2">
              <div class="bh-item-title title-item">
                Only show people in this range
              </div>
              <div>
                <el-switch
                  v-model="value2"
                  active-color="#FB5D65"
                  inactive-color="#5F6A86"
                >
                </el-switch>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mt-6">
          <div class="form-set-list">
            <div class="w-full flex justify-between">
              <div class="bh-title title-item form-set-item">AGE RANGE</div>
              <div class="bh-describe">{{ valueAge }}</div>
            </div>

            <div class="w-full">
              <el-slider
                v-model="valueAge"
                range
                :show-input-controls="true"
                :max="50"
                @change="onChangeAgeRange()"
              >
              </el-slider>
            </div>
            <div class="flex justify-between w-full">
              <div class="bh-item-title title-item">
                Only show people in this range
              </div>
              <div>
                <el-switch
                  v-model="value2"
                  active-color="#FB5D65"
                  inactive-color="#5F6A86"
                >
                </el-switch>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mt-6">
          <div class="w-full form-set-list">
            <div class="w-full flex justify-between bh-title form-set-item">
              <div>SHOW ME</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full bd-input items-center">
                  <div class="bh-item-title form-set-item">Men</div>
                  <div>
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>

                <div class="flex justify-between w-full bd-input items-center">
                  <div class="bh-item-title form-set-item">Women</div>
                  <div>
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>

                <div class="flex justify-between w-full items-center">
                  <div class="bh-item-title form-set-item">Everyone</div>
                  <div>
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full p-3 bh-describe">
            We use these preferences to find matches. Some match suggestions may
            not fall within your desired parameters
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex bh-title items-center p-3">
              <div class="form-set-item">CONTROL WHO YOU SEE</div>
              <div class="ml-3">
                <div class="style-package">Sliver package</div>
              </div>
            </div>
            <div class="w-full flex items-center form-set-list">
              <div class="w-full style-bg-common">
                <div
                  class="flex justify-between w-full form-set-item items-center bd-input"
                >
                  <div class="w-full">
                    <div class="bh-item-title">Balance recommendations</div>
                    <div class="bh-describe">
                      See the most relevant people to you (default settings)
                    </div>
                  </div>
                  <div>
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>

                <div
                  class="flex justify-between w-full form-set-item items-center"
                >
                  <div class="w-full">
                    <div class="bh-item-title">Recently Active</div>
                    <div class="bh-describe">
                      See the most recently active people first
                    </div>
                  </div>
                  <div>
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex bh-title p-3 items-center">
              <div class="form-set-item">CONTROL WHO YOU SEE</div>
              <div class="ml-3">
                <div class="style-package">Sliver package</div>
              </div>
            </div>
            <div class="w-full flex items-center form-set-list">
              <div class="w-full style-bg-common">
                <div
                  class="flex justify-between w-full bd-input form-set-item items-center"
                >
                  <div class="w-full">
                    <div class="bh-item-title title-item">Standard</div>
                    <div class="bh-describe">
                      Only be shown to certain types of people for individual
                      recommendations
                    </div>
                  </div>
                  <div>
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>

                <div
                  class="flex justify-between w-full form-set-item items-center"
                >
                  <div class="w-full">
                    <div class="bh-item-title title-item">
                      Only people I've liked
                    </div>
                    <div class="bh-describe">
                      Only people you have liked will see me
                    </div>
                  </div>
                  <div>
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex bh-title p-3 items-center">
              <div>SHOW ME ON CARD STACK</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common form-set-list">
                <div class="flex justify-between w-full">
                  <div class="w-full">
                    <div class="flex justify-between items-center">
                      <div class="form-set-item bh-item-title title-item">
                        Show me on Card Stack
                      </div>
                      <div>
                        <el-switch
                          v-model="value2"
                          active-color="#FB5D65"
                          inactive-color="#5F6A86"
                        >
                        </el-switch>
                      </div>
                    </div>
                    <div class="form-set-item bh-describe">
                      If you turn off, you will not be shown in the card stack.
                      People you have already liked may still your profile and
                      match with you. You can still see and chat with your
                      matches
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full form-set-list">
            <div class="w-full title-item form-set-item bh-title">
              <div>SHOW ME</div>
            </div>
            <div class="w-full flex items-center bh-item-title">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full form-set-item bd-input">
                  <div class="bh-item-title">Only Wi-fi Only</div>
                  <div>
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>

                <div class="flex justify-between w-full form-set-item bd-input">
                  <div class="bh-item-title">On Wi-fi and mobile data</div>
                  <div>
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>

                <div class="flex justify-between w-full form-set-item">
                  <div class="bh-item-title">Never autoplay videos</div>
                  <div>
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full">
            <div class="w-full flex items-center form-set-list">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full">
                  <div class="w-full">
                    <div
                      class="form-set-item bh-item-title title-item flex justify-between items-center"
                    >
                      <div class="">Q&A Events</div>
                      <div>
                        <el-switch
                          v-model="value2"
                          active-color="#FB5D65"
                          inactive-color="#5F6A86"
                        >
                        </el-switch>
                      </div>
                    </div>
                    <div class="form-set-item bh-describe">
                      Turning this off will remove Q&A event content from your
                      profile, and you'll no longer see profiles with Q&A event
                      content
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full">
            <div class="w-full flex items-center form-set-list">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full">
                  <div class="w-full">
                    <div
                      class="form-set-item bh-item-title title-item flex justify-between items-center"
                    >
                      <div class="">Show me Top picks</div>
                      <div>
                        <el-switch
                          v-model="value2"
                          active-color="#FB5D65"
                          inactive-color="#5F6A86"
                        >
                        </el-switch>
                      </div>
                    </div>
                    <div class="form-set-item bh-describe w-full">
                      Turning this on will allow you to be shown as a featured
                      Top Pick to other users near you
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full">
            <div class="w-full flex items-center form-set-list">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full">
                  <div class="w-full">
                    <div
                      class="form-set-item bh-item-title title-item flex justify-between items-center"
                    >
                      <div class="">Send Read Receipts</div>
                      <div>
                        <el-switch
                          v-model="value2"
                          active-color="#FB5D65"
                          inactive-color="#5F6A86"
                        >
                        </el-switch>
                      </div>
                    </div>
                    <div class="form-set-item bh-describe w-full">
                      Turning this off will prevent any matches from activating
                      Reading Receipts in your conversation from this moment on
                      forward
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full">
            <div class="w-full flex items-center form-set-list">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full">
                  <div class="w-full">
                    <div
                      class="form-set-item bh-item-title title-item flex justify-between items-center"
                    >
                      <div class="">Activity Status</div>
                      <div>
                        <el-switch
                          v-model="value2"
                          active-color="#FB5D65"
                          inactive-color="#5F6A86"
                        >
                        </el-switch>
                      </div>
                    </div>
                    <div class="form-set-item bh-describe w-full">
                      Allow other members to see if you were recently active
                      within the last 24h on HeartLink. If you have turned this
                      off, they will not be able to see your recently active
                      status
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div class="w-full bh-item-title title-size">App Setiings</div>
            </div>
            <div class="w-full form-set-list">
              <div class="w-full flex justify-between form-set-item">
                <div class="bh-title">SHOW DISTANCE IN</div>
                <div class="bh-describe">km.</div>
              </div>

              <div
                class="w-full flex justify-center items-center form-set-item"
              >
                <div class="style-km">Km.</div>

                <div class="style-mi">Mi.</div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full form-set-list">
            <div class="w-full flex justify-between bh-title form-set-item">
              <div>NOTIFICATIONS</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full form-set-item bd-input">
                  <div class="bh-item-title">Email</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>

                <div class="flex justify-between w-full form-set-item bd-input">
                  <div class="flex justify-between w-full">
                    <div class="bh-item-title">Push Notification</div>
                    <div>
                      <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                    </div>
                  </div>
                </div>

                <div class="flex justify-between w-full form-set-item">
                  <div class="bh-item-title">Team HeartLink</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full form-set-list">
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="w-full">
                  <div
                    class="w-full form-set-item flex justify-between items-center"
                  >
                    <div class="bh-item-title">Dark theme</div>
                    <div>
                      <el-switch
                        v-model="value2"
                        active-color="#FB5D65"
                        inactive-color="#5F6A86"
                      >
                      </el-switch>
                    </div>
                  </div>
                  <div class="bh-describe">Choose the theme you like most</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full form-set-list">
            <div class="w-full flex justify-between bh-title">
              <div>PAYMENT ACCOUNT</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full form-set-item bd-input">
                  <div class="bh-item-title">Manage payment account</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
                <div class="flex justify-between w-full form-set-item">
                  <div class="bh-item-title">Restore purchase</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full form-set-list">
            <div class="w-full flex justify-between bh-title">
              <div>COMMUNITY</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full form-set-item bd-input">
                  <div class="bh-item-title">Community Guidelines</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>

                <div class="flex justify-between w-full form-set-item bd-input">
                  <div class="bh-item-title">Safe tips</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>

                <div class="flex justify-between w-full">
                  <div class="bh-item-title">Safety center</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full form-set-list">
            <div class="w-full flex justify-between bh-title p-3">
              <div>PRIVACY</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full form-set-item bd-input">
                  <div class="bh-item-title">Cookie policy</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>

                <div class="flex justify-between w-full form-set-item bd-input">
                  <div class="bh-item-title">Privacy policy</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>

                <div class="flex justify-between w-full form-set-item">
                  <div class="bh-item-title">Privacy preferences</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex items-center mt-6">
          <div class="w-full form-set-list">
            <div class="w-full flex justify-between bh-title">
              <div>CONTACT US</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full form-set-item">
                  <div class="bh-item-title">Help & support</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full form-set-list">
            <div class="w-full flex justify-between bh-title">
              <div>LEGAL</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full form-set-item bd-input">
                  <div class="bh-item-title">Licenses</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>

                <div class="flex justify-between w-full form-set-item">
                  <div class="bh-item-title">Terms of Service</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mt-6">
          <div
            class="w-full flex form-set-input justify-center items-center bh-item-title"
          >
            LOG OUT
          </div>
        </div>

        <div
          class="w-full flex justify-center items-center form-set-item mt-10"
        >
          <div>
            <img
              src="@/assets/icon/ic_icon_app.svg"
              style="width: 100%"
              alt=""
              srcset=""
            />
            <div class="bh-describe">Version x.y.z</div>
          </div>
        </div>
      </div>

      <div class="w-full">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "../../../components/layout/footer-home/footer";
import BhBack from "../../../components/bh-element-ui/button/bh-back";
export default {
  components: {
    Footer,
    BhBack,
  },
  name: "setting-detail",
  data() {
    return {
      value1: 4,

      valueAge: [18, 40],

      value3: true,

      valueGlobal: false,
      valueLocation: 8,
    };
  },

  computed: {
    addressLocation() {
      const lat = localStorage.latitude;
      const long = localStorage.longitude;

      if (lat !== "" && long !== "") {
        return " Hà Nội ";
      } else {
        return "My Current Location";
      }
    },
  },

  methods: {
    onBackSetting(val) {
      console.log(val);
      this.$router.push({ path: "/setting" });
    },

    onChangeGlobal() {},

    onChangeAgeRange(val) {
      debugger;
      this.valueAge = val;

      localStorage.setItem("startAge", this.valueAge[0]);
      localStorage.setItem("endAge", this.valueAge[1]);
    },
    onChangeLocations(val) {
      debugger;
      this.valueLocation = val;

      localStorage.setItem("locations", val);
    },

    /**
     * Xử lý vị trí user
     */
    onClickLocation() {},
  },
};
</script>

<style lang="css">
.bg-theme {
  background-color: #242a38;
}
.header-edit {
  height: 10%;
}

.hight-setting {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  overflow-y: scroll; /* Add the ability to scroll */
  height: 79%;
}

.hight-setting::-webkit-scrollbar {
  display: none;
}

.gold-package {
  border-radius: 10px;
  height: 27%;
}

.gold-package {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
}

.gold-package::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

.border-package {
  width: 100%;
  height: 200px;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.dash-packages {
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.VueCarousel-pagination {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 40px;
}
.VueCarousel-dot {
  padding: 5px !important;
  width: 8px !important;
  height: 8px !important;
}

.item-package {
  padding: 20px;
  width: 100%;
  color: white;
  height: 100%;
}
</style>
