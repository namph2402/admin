import {Component} from '@angular/core';
import {AbstractCRUDModalComponent, AbstractModalComponent} from '../../../core/crud';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap';
import {ProductService} from '../../product/product.service';
import {AppPagination, FieldForm, ModalResult} from '../../../core/common';
import {ProductTagAssignCreateComponent} from '../product-tag-assign-create/product-tag-assign-create.component';
import {ProductMeta} from '../../product/product.meta';
import { ProductTagService } from '../../product-tag/product-tag.service';
import { ProductTagMeta } from '../../product-tag/product-tag.meta';

@Component({
  selector: 'app-product-tag-assign-list',
  templateUrl: './product-tag-assign-list.component.html',
  styleUrls: ['./product-tag-assign-list.component.css'],
  providers: [ProductService, ProductTagService]
})
export class ProductTagAssignListComponent extends AbstractCRUDModalComponent<ProductMeta> {

  constructor(
    service: ProductService,
    modalRef: BsModalRef,
    modal: BsModalService,
    builder: FormBuilder,
    private tagService: ProductTagService
  ) {
    super(service, modalRef, modal, builder);
  }

  onInit(): void {
  }

  onDestroy(): void {
  }

  getTitle(): string {
    return 'Quản lý gán tag';
  }

  getCreateModalComponent() {
    return ProductTagAssignCreateComponent;
  }

  getEditModalComponent() {
    return null;
  }

  getCreateModalComponentOptions(): ModalOptions {
    return {'class': 'modal-lg', ignoreBackdropClick: true};
  }

  getEditModalComponentOptions(): ModalOptions {
    return null;
  }

  buildSearchForm(): FormGroup {
    return this.formBuilder.group({});
  }

  initSearchForm(): FieldForm[] {
    return [];
  }

  initNewModel(): ProductMeta {
    const model = new ProductMeta();
    model.id = this.relatedModel.id;
    return model;
  }

  loaded(): void {
  }

  load(): void {
    let param = {
      product_id: this.relatedModel.id,
      limit: this.pagination.itemsPerPage,
      page: this.pagination.currentPage,
    };
    this.tagService.loadByPage(param).subscribe((res: any) => {
      this.nextPage = this.pagination.currentPage;
      this.list = res.data;
      this.pagination.set(res);
    }, () => {
      this.list = [];
      this.pagination = new AppPagination();
      this.nextPage = this.pagination.currentPage;
    });
  }

  createTag() {
    let modalRef = this.modalService.show(this.getCreateModalComponent(), this.getCreateModalComponentOptions());
    let modal: AbstractModalComponent<ProductTagMeta> = <AbstractModalComponent<ProductTagMeta>>modalRef.content;
    modal.setModel(this.initNewModel());
    let sub = modal.onHidden.subscribe((result: ModalResult<ProductTagMeta>) => {
      if (result.success) {
        this.load();
      }
      sub.unsubscribe();
    });
  }

  detach(item) {
    (<ProductService>this.service).detachTags(this.relatedModel.id, item).subscribe((res: ProductMeta) => {
      this.service.toastSuccessfully('Xóa tag');
      this.load();
    }, () => this.service.toastFailed('Xóa tag'));
  }

}
