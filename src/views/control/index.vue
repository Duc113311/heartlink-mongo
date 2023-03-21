<template>
  <div class="swipe-container w-full h-full">
    <div
      v-for="item in items"
      :key="item.id"
      class="swipe-card w-11 h-11 p-10 bg-slate-300 mb-3"
      ref="cards"
    >
      <!-- Your card content here -->
      <div>
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "control-page",
  data() {
    return {
      items: [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Bob" },
      ],
      startX: 0,
      startY: 0,
      deltaX: 0,
      deltaY: 0,
      threshold: 100, // The minimum distance required for a swipe
    };
  },
  mounted() {
    this.$refs.cards.forEach((card) => {
      card.addEventListener("touchstart", this.onTouchStart);
      card.addEventListener("touchmove", this.onTouchMove);
      card.addEventListener("touchend", this.onTouchEnd);
    });
  },
  beforeUnmount() {
    this.$refs.cards.forEach((card) => {
      card.removeEventListener("touchstart", this.onTouchStart);
      card.removeEventListener("touchmove", this.onTouchMove);
      card.removeEventListener("touchend", this.onTouchEnd);
    });
  },
  methods: {
    onTouchStart(e) {
      this.startX = e.touches[0].pageX;
      this.startY = e.touches[0].pageY;
    },
    onTouchMove(e) {
      this.deltaX = e.touches[0].pageX - this.startX;
      this.deltaY = e.touches[0].pageY - this.startY;
      e.target.style.transform = `translateX(${this.deltaX}px)`;
    },
    onTouchEnd(e) {
      if (Math.abs(this.deltaX) >= this.threshold) {
        if (this.deltaX > 0) {
          // Swipe right
          console.log("Swipe right");
        } else {
          // Swipe left
          console.log("Swipe left");
        }
      } else {
        // Reset card position
        e.target.style.transform = "";
      }
      // Reset delta values
      this.deltaX = 0;
      this.deltaY = 0;
    },
  },
};
</script>

<style></style>
