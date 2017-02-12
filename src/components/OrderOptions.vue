<template>
    <div class="dialogOrderOption">
        <div class="dialogOrderOptionOverlay">
        </div>
        <div class="mdl-dialog">
            <div class="mdl-dialog__content">
                <p>
                    This is an example of the MDL Dialog being used as a modal.
                    It is using the full width action design intended for use with buttons
                    that do not fit within the specified <a href="https://www.google.com/design/spec/components/dialogs.html#dialogs-specs">length metrics</a>.
                </p>
            </div>
            <div class="mdl-dialog__actions mdl-dialog__actions--full-width">
                <button type="button" class="mdl-button">Close</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
};
</script>
<style lang="scss">
.mdl-dialog {
    display: none;
    position: fixed;
    left: 40%;
    top: 25%;
    z-index: 5;
    background-color: white;
}

.dialogOrderOptionOverlay {
    display: none;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    height: 100%;
    z-index: 4;
}
</style>